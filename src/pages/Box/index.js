import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg';
import FileList from './FileList';
import Upload from '../../components/Upload';
import { Container, Content } from '../../styles/components';
import { 
    BoxContainer,
    BoxHeaderContainer,
    BoxUserContainer,
    BoxLoadContainer,
} from './styles';

class Box extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            box: { files: [] },
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.fetchBox();
    }

    fetchBox = async() => {
        const { id } = this.props.match.params;

        this.setState({ loading: true });
        try {
            const response = await api.get(`/boxes/${id}`); 
            this.setState({ 
                box: { 
                    ...this.state.box,
                    ...response.data,
                     files: response.data.files.map(file => ({
                        file: file,
                        id: file._id,
                        name: file.name,
                        readableSize: filesize(file.size),
                        uploaded: true,
                        url: file.url
                    })),                      
                },
                loading: false,
                error: false,
            });
    
        } catch(err) {
            this.setState({ loading: false, error: true })
        }
    }

    handleRemove = async id => {
        await api.delete(`/files/${id}`); 
        this.setState({ box: { ...this.state.box, files: this.state.box.files.filter(file => file.id !== id) } })
    }

    handleUpload = files => {

        const filesToUpload = files.map(file => ({     
            file,
            id: parseInt(uniqueId()),
            name: file.name,
            readableSize: filesize(file.size),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }));

        const newFiles = this.state.box.files;
        filesToUpload.forEach(file => {
            newFiles.unshift(file);   
        });

        this.setState({ box: { ...this.state.box, files: newFiles } });

        filesToUpload.forEach(this.processUpload);
    }

    updateFile = (id, data) => {
        this.setState( { box: { ...this.state.box, files: this.state.box.files.map(file => {
            return id === file.id ? { ...file, ...data } : file
        })}})
    }

    processUpload = fileToUpload => {
        const { id } = this.props.match.params;

        const data = new FormData();
        data.append('file', fileToUpload.file, fileToUpload.name);

        api.post(`/boxes/${id}/files`, data, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total));
                this.updateFile(fileToUpload.id, { progress })
            }
        }).then(response => {
            this.updateFile(fileToUpload.id, {
                uploaded: true,
                id: response.data._id,
                url: response.data.url,
            })
        }).catch(e => {
            this.updateFile(fileToUpload.id, { error: true })
        })
    }
        
    render() {
        const { box, loading, error } = this.state
        return (
            <BoxContainer>
                <BoxHeaderContainer>
                    <img src={logo} alt="" />
                    <h1>{box.title}</h1>
                </BoxHeaderContainer> 
                <BoxUserContainer>  
                    <span>{box.email}</span>
                </BoxUserContainer>
                { loading &&
                    <BoxLoadContainer>
                        <img src={load} alt="Carregando..."/>
                    </BoxLoadContainer>
                }
                { !loading &&            
                    <Container>   
                        <Content>                             
                            <Upload handleUpload={this.handleUpload}/>
                            { error &&
                                <h3 style={{ textAlign: 'center', padding: 10 }}>Box não encontrado!</h3>
                            }
                            { !error &&
                                <FileList files={this.state.box.files} handleRemove={this.handleRemove}/>
                            }
                        </Content>
                    </Container>        
                }
            </BoxContainer>
        )    
    }
}

export default Box;