import React, { Component } from 'react';
import socket from 'socket.io-client';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg';
import File from '../File';
import Dropzone from 'react-dropzone';
import { 
    BoxContainer,
    BoxHeaderContainer,
    BoxUserContainer,
    BoxLoadContainer,
    BoxUploadContainer,
    BoxFilesContainer
} from './styles'

class Box extends Component {

    constructor(props) {
        super(props)
        this.state = {
            box: { files: [] },
            loading: false,
        }    
        this.io = socket('http://localhost:3333', { query: { match: 1 } });  
    }

    componentDidMount() {
        this.subscribeFiles();
        this.fetchBox();
    }

    subscribeFiles = () => {
        this.io.on('new-file', payload => {
            const boxNew = { ...this.state.box, files: [ payload, ...this.state.box.files ] }
            this.setState({ box: boxNew });
        })

        this.io.on('delete-file', payload => {
            const boxNew = { ...this.state.box, files: this.state.box.files.filter(file => file._id !== payload) }
            this.setState({ box: boxNew })
        })
    }

    fetchBox = async() => {
        const { id } = this.props.match.params;
        
        this.setState({ loading: true })

        const response = await api.get(`/boxes/${id}`);  
        this.setState({ box: response.data })

        this.setState({ loading: false })
    }

    handleRemove = async file => {
        const foundFile = this.state.box.files.find(f => f._id === file._id)
        const fileDelete = { ...foundFile, deleting: true }

        const newFiles = this.state.box.files;

        const idx = this.state.box.files.indexOf(foundFile);
        newFiles[idx] = fileDelete;

        this.setState({ box: { ...this.state.box, files: newFiles } })

        await api.delete(`/boxes/${this.state.box._id}/files/${file._id}`) 

        this.setState({ box: { ...this.state.box, files: this.state.box.files.filter(file => file._id !== fileDelete._id) } })
    }

    handleUpload = async files => {
        const { id } = this.props.match.params;

        for (const file of files) {
            const data = new FormData();
            data.append('file', file);
            
            const fileUpload = { _id: file.lastModified, title: file.name, uploading: true };

            const newFiles = this.state.box.files;
            newFiles.unshift(fileUpload);

            this.setState({ box: { ...this.state.box, files: newFiles} });

            await api.post(`/boxes/${id}/files`, data);

            this.setState({ box: { ...this.state.box, files: this.state.box.files.filter(file => file._id !== fileUpload._id)} });
        }
    }

    renderFile = file => {
        return ( 
            <File 
                key={file._id} 
                handleRemove={this.handleRemove} 
                file={file}
            />
        )   
    } 

    render() {         
        const { box, loading } = this.state;
        return (
            <BoxContainer>
                <BoxHeaderContainer>
                    <img src={logo} alt="" />
                    <h1>{box.title}</h1>
                </BoxHeaderContainer> 
                <BoxUserContainer>  
                    <span>{box.email}</span>
                </BoxUserContainer>
                <Dropzone onDropAccepted={this.handleUpload}>
                    {({ getRootProps, getInputProps }) => (
                        <BoxUploadContainer {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Arraste arquivos ou clique aqui</p>
                        </BoxUploadContainer>
                    )}
                </Dropzone>

                { loading &&
                    <BoxLoadContainer>
                        <img src={load} alt="Carregando..."/>
                    </BoxLoadContainer>
                }
                { !loading &&            
                    <BoxFilesContainer>                                
                        { box.files && box.files.map(file => this.renderFile(file)) }                            
                    </BoxFilesContainer>        
                }
            </BoxContainer>
        )
    }
}

export default Box;