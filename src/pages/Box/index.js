/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component } from 'react';
import socket from 'socket.io-client';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import remove from '../../assets/delete.svg';
import load from '../../assets/loading.svg'
import Dropzone from 'react-dropzone';
import { MdInsertDriveFile } from 'react-icons/md';
import { distanceInWords } from 'date-fns';
import './styles.css';
import pt from 'date-fns/locale/pt';

class Box extends Component {

    constructor(props) {
        super(props)
        this.state = {
            box: { files: [] },
            loading: false,
            uploading: false,
            deleting: false
        }    
        this.io = socket('http://localhost:3333', { query: { match: 1 } });  
    }

    componentDidMount() {
        this.subscribeFiles();
        this.fetchBox();
    }

    subscribeFiles = ()  => {
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
        const { box } = this.state;
        this.idDeleting = file._id;
        this.setState({ deleting: true })

        await api.delete(`/boxes/${box._id}/files/${file._id}`) 

        this.setState({ deleting: false })
    }

    handleUpload = files => {
        files.forEach(async (file) => {
            const formData = new FormData();
            formData.append('file', file);

            this.setState({ uploading: true })

            const { id } = this.props.match.params;
            await api.post(`/boxes/${id}/files`, formData);

            this.setState({ uploading: false })
        });
    }

    render() {    
        const { box, loading, uploading } = this.state;

        return (
            <div className='box-container'>
                <header>
                    <img src={logo} alt="" />
                    <h1>{box.title}</h1>
                </header>   
                <span>{box.email}</span>
                { loading &&
                    <div className='img-container'>
                        <img src={load} alt="Carregando..."/>
                    </div>
                }
                { !loading &&            
                    <div>
                        <Dropzone onDropAccepted={this.handleUpload}>
                            {({ getRootProps, getInputProps }) => (
                                <div className="upload" {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Arraste arquivos ou clique aqui</p>
                                </div>
                            )}
                        </Dropzone>
                        <ul>
                            { uploading &&
                                <li>
                                    <img src={load} alt="Carregando..."/>
                                </li>
                            }    
                            { box.files && box.files.map(file => (
                                <li key={file._id}>
                                    <a style={{ flex: 2 }} href={file.url}>
                                        <MdInsertDriveFile size={22} color="#A5CFFF" />
                                        <strong>{file.title}</strong>
                                    </a>            
                                    <span style={{ flex: 1 }}>
                                        Há {distanceInWords(file.createdAt, new Date(), { locale: pt })}
                                    </span>
                                    { !this.state.deleting &&
                                        <img onClick={() => this.handleRemove(file)} src={remove} alt="Excluir"/>
                                    }
                                    { this.state.deleting && this.idDeleting === file._id &&
                                        <img src={load} alt="Removendo..."/>
                                    }
                                    { this.state.deleting && this.idDeleting !== file._id &&
                                        <img onClick={() => this.handleRemove(file)} src={remove} alt="Excluir"/>
                                    }

                                </li>
                            ))}
                        </ul>        
                    </div>
                }
            </div>
        )
    }
}

export default Box;