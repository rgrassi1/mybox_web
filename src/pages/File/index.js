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
                    <a className='file-container-item' style={{ flex: 2 }} href={file.url}>
                        <MdInsertDriveFile size={22} color="#A5CFFF" />
                        <strong>{file.title}</strong>
                    </a>            
                    <span className='file-container-item' style={{ flex: 1 }}>
                        Há {distanceInWords(file.createdAt, new Date(), { locale: pt })}
                    </span>
                    <button className='file-container-item'>
                        <img onClick={() => props.handleRemove(file)} src={remove} alt="Excluir"/>                        
                    </button>
                </div>
            }

            { file.deleting &&
                <div className='file-delete-container'>
                    <span>{file.title}</span>
                    <strong>deleting...</strong>
                </div>
            }
        </li>
    )
}

export default File;