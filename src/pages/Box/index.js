/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import socket from 'socket.io-client';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg'
import Dropzone from 'react-dropzone';
import { MdInsertDriveFile } from 'react-icons/md';
import { distanceInWords } from 'date-fns';
import './styles.css';
import pt from 'date-fns/locale/pt'

const Box = props => {

    const [box, setBox] = useState({ files: [] });  
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchBox();
    }, [])

    useEffect(() => {
        subscribeNewFiles();
    }, [box])

    const { id } = props.match.params;

    const io = socket('http://localhost:3333');

    const fetchBox = async() => {
        setLoading(true);
        const response = await api.get(`/boxes/${id}`);  
        setBox(response.data);
        setLoading(false);
    }

    const subscribeNewFiles = () => {
        io.on('file', payload => {
            setBox({ ...box, files: [ payload, ...box.files ] });
        })
    }

    const handleUpload = files => {
        files.forEach(async (file) => {
            const { id } = props.match.params;

            const formData = new FormData();
            formData.append('file', file);

            setUploading(true)
            const response = await api.post(`/boxes/${id}/files`, formData);
            io.emit('file', response.data)
            setUploading(false)
        });
    }
    return (
        <div className='box-container'>
            <header>
                <img src={logo} alt="" />
                <h1>{box.title}</h1>
            </header>   
            <span>{box.email}</span>
            { loading &&
                <div className='img-container'>
                    <img src={load} alt=""/>
                </div>
            }
            { !loading &&            
                <div>
                    <Dropzone onDropAccepted={handleUpload}>
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
                                <img src={load} alt=""/>
                            </li>
                        }    
                        { box.files && box.files.map(file => (
                            <li key={file._id}>
                                <a className="fileInfo" href={file.url}>
                                    <MdInsertDriveFile size={22} color="#A5CFFF" />
                                    <strong>{file.title}</strong>
                                </a>
        
                                <span>Há {distanceInWords(file.createdAt, new Date(), {
                                    locale: pt
                                })}</span>
                            </li>
                        ))}
                    </ul>        
                </div>
            }
        </div>
    )
}

export default Box;