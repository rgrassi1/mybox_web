import React from 'react';
import { MdLink, MdError, MdCheckCircle } from 'react-icons/md';
import { FileInfo } from './styles'
import { CircularProgressbar } from 'react-circular-progressbar';

const File = ({ file, handleRemove }) => {
    return (
        <li>
            <FileInfo>
                <div>
                    <strong>{file.name}</strong> 
                    <span>
                        {file.readableSize}{" "} 
                        {file.uploaded && <button onClick={() => { handleRemove(file.id) }}>Excluir</button> }
                    </span>
                </div>
            </FileInfo>
            <div>
                {!file.uploaded && !file.error && (
                    <CircularProgressbar
                        styles={{
                            root: { width: 24 },
                            path: { stroke: '#7159c1' }
                        }}
                        strokeWidth={10}
                        value={file.progress}
                    >
                    </CircularProgressbar>
                )}

                { file.url && (
                    <a href={file.url} target='_blank' rel='noopener noreferrer'>
                        <MdLink style={{ marginRight: 8 }} size={24} color='#222' />   
                    </a>
                )}
                { file.uploaded && <MdCheckCircle size={24} color='#78e5d5' /> }
                { file.error && <MdError size={24} color='#e57878' /> }
            </div>
        </li>
    )
}

export default File;