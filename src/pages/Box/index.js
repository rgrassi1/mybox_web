import React, { useState, useEffect } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg';
import FileList from '../FileList';
import Upload from '../Upload';
import { Container, Content } from '../../styles/styles';
import { 
    BoxContainer,
    BoxHeaderContainer,
    BoxUserContainer,
    BoxLoadContainer,
} from './styles'

const Box = props =>  {

    const [box, setBox] = useState({ loading: false, files: [] })

    useEffect(() => {
        fetchBox()
    }, [])

    const fetchBox = async() => {
        const { id } = props.match.params;
        
        setBox({ ...box, loading: true })
        const response = await api.get(`/boxes/${id}`); 

        setBox({ ...box, ...response.data,  files: response.data.files.map(file => ({
            file: file,
            id: file._id,
            name: file.name,
            readableSize: filesize(file.size),
            uploaded: true,
            url: file.url
        })),                      
        loading: false });
    }

    const handleRemove = async id => {
        await api.delete(`/files/${id}`); 
        setBox({ ...box, files: box.files.filter(file => file.id !== id) })
    }

    const handleUpload = files => {
        const filesToUpload = files.map(file => ({     
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }));

        const newFiles = box.files;
        filesToUpload.forEach(file => {
            newFiles.unshift(file);   
        });

        setBox({ ...box, files: newFiles });

        filesToUpload.forEach(processUpload);
    }

    const updateFile = (id, data) => {
        setBox({ ...box, files: box.files.map(file => {
            return id === file.id ? { ...file, ...data } : file
        })})
    }

    const processUpload = fileToUpload => {
        const { id } = props.match.params;

        const data = new FormData();
        data.append('file', fileToUpload.file, fileToUpload.name);

        api.post(`/boxes/${id}/files`, data, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round(e.loaded * 100 / e.total));
                updateFile(fileToUpload.id, { progress })
            }
        }).then(response => {
            updateFile(fileToUpload.id, {
                uploaded: true,
                id: response.data._id,
                url: response.data.url,
            })
        }).catch(e => {
            updateFile(fileToUpload.id, { error: true })
        })}
        

    return (
        <BoxContainer>
            <BoxHeaderContainer>
                <img src={logo} alt="" />
                <h1>{box.title}</h1>
            </BoxHeaderContainer> 
            <BoxUserContainer>  
                <span>{box.email}</span>
            </BoxUserContainer>
            { box.loading &&
                <BoxLoadContainer>
                    <img src={load} alt="Carregando..."/>
                </BoxLoadContainer>
            }
            { !box.loading &&            
                <Container>   
                    <Content>                             
                        <Upload handleUpload={handleUpload}/>
                        <FileList files={box.files} handleRemove={handleRemove}/>
                    </Content>
                </Container>        
            }
        </BoxContainer>
    )    
}

export default Box;