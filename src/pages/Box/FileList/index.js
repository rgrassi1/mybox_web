import React from 'react'
import File from '../File';
import { Container } from './styles';

const FileList = ({ files, handleRemove }) => (    
    <Container>
        { files.map(file => {
            return (
                 <File key={file.id} file={file} handleRemove={handleRemove} />
            )})
        }
    </Container>
)

export default FileList;