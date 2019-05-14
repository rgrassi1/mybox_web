import React, { useState } from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import remove from '../../assets/delete.svg';
import { 
    BoxFileContainer,
    UploadingContainer,
    FileContainer,
    ElementsFileContainer,
    ActionsFileContainer,
    DeletingContainer
} from './styles'

const File = props => {

    const [actions, setActions] = useState(false);

    const onMouseHover = () => {
        setActions(true);
    }
    const onMouseLeave = () => {
        setActions(false);
    }

    const { file } = props
    return (
        <li>
            <BoxFileContainer onMouseLeave={onMouseLeave} onMouseOver={onMouseHover}>
                { file.uploading &&
                    <UploadingContainer>
                        <span>{file.title}</span>
                        <strong>uploading...</strong>
                    </UploadingContainer>
                }

                { !file.uploading && !file.deleting &&
                    <FileContainer>
                        <ElementsFileContainer>
                            <a href={file.url}>
                                <MdInsertDriveFile size={22} color="#A5CFFF" />
                                <strong>{file.title}</strong>
                            </a>            
                            <span>
                                Há {distanceInWords(file.createdAt, new Date(), { locale: pt })}
                            </span>
                        </ElementsFileContainer>
                        { actions &&
                            <ActionsFileContainer>
                                <button onClick={() => props.handleRemove(file)}>
                                    <img src={remove} alt="Excluir"/>                        
                                </button>                                
                            </ActionsFileContainer>
                        }
                    </FileContainer>
                }

                { file.deleting &&
                    <DeletingContainer>
                        <span>{file.title}</span>
                        <strong>deleting...</strong>
                    </DeletingContainer>
                }
            </BoxFileContainer>
        </li>
    )
}

export default File;