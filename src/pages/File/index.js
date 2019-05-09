import React from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import remove from '../../assets/delete.svg';
import './styles.css';

const File = props => {
    const { file } = props
    return (
        <li className='file-general-container'>
            { file.uploading &&
                <div className='file-upload-container'>
                    <span>{file.title}</span>
                    <strong>uploading...</strong>
                </div>
            }

            { !file.uploading && !file.deleting &&
                <div className='file-container'>
                    <a className='file-container-item' href={file.url}>
                        <MdInsertDriveFile size={22} color="#A5CFFF" />
                        <strong>{file.title}</strong>
                    </a>            
                    <span className='file-container-item'>
                        Há {distanceInWords(file.createdAt, new Date(), { locale: pt })}
                    </span>
                    <img className='file-container-item' onClick={() => props.handleRemove(file)} src={remove} alt="Excluir"/>                        
                </div>
            }

            { file.deleting &&
                <div className='file-delete-container'>
                    <span>{file.title}</span>
                    <strong style={{ color: '#E36B24' }}>deleting...</strong>
                </div>
            }
        </li>
    )
}

export default File;