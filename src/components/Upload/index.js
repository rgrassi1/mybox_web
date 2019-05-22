import React from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer } from './styles';

const Upload = props => {
    return (
        <Dropzone onDropAccepted={props.handleUpload}>
            {({ getRootProps, getInputProps }) => (
                <DropContainer {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Arraste arquivos ou clique aqui</p>
                </DropContainer>
            )}
        </Dropzone>
    )
}

export default Upload;