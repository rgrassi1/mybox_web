import React, { useState, useEffect } from 'react';
import socket from 'socket.io-client';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import Dropzone from 'react-dropzone';
import { MdInsertDriveFile } from 'react-icons/md';
import './styles.css';

const Box = props =>  {

    const [box, setBox] = useState({});   
    
    useEffect(() => {
        subscribeNewFiles();
        fetchBox();
        return () => {
            
        }
    }, )


    const fetchBox = async() => {
        const { id } = props.match.params;
        const response = await api.get(`/boxes/${id}`);   
        setBox(response.data);
    }

    const subscribeNewFiles = () => {
        const { id } = props.match.params;
        const io = socket(process.env.API_URL || 'http://localhost:3333');

        io.emit('connectRoom', id);

        io.on('file', data => {
            setBox({ ...box, files: [data, ...box.files] });
        })
    }

    const handleUpload = files => {
        files.forEach(file => {
            const { id } = this.props.match.params;

            const formData = new FormData();
            formData.append('file', file);

            api.post(`/boxes/${id}/files`, formData);
        });
    }

    return (
        <div className='box-container'>
            <header>
                <img src={logo} alt="" />
                <h1>{box.title}</h1>
            </header>   
            <span>{box.email}</span>

            <Dropzone onDropAccepted={handleUpload}>
                {({ getRootProps, getInputProps }) => (
                    <div className="upload" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Arraste arquivos ou clique aqui</p>
                    </div>
                )}
            </Dropzone>

            <ul>
                { box.files && box.files.map(file => (
                    <li key={file._id}>
                        <a className="fileInfo" href={file.url}>
                            <MdInsertDriveFile size={24} color="#A5CFFF" />
                            <strong>{file.title}</strong>
                        </a>
                        {/*<span>Há {distanceInWords(file.createdAt, new Date(), {
                            locale: pt
                        })}</span>*/}
                    </li>
                ))}
            </ul>        
        </div>
    )
}

export default Box;