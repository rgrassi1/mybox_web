import React, { useState } from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import remove from '../../assets/delete.svg';
import { 
    Container,
    UploadContainer,
    FileContainer,
    ElementsContainer,
    ActionsContainer,
    DeleteContainer
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
            <Container onMouseLeave={onMouseLeave} onMouseOver={onMouseHover}>
                { file.uploading &&
                    <UploadContainer>
                        <span>{file.title}</span>
                        <strong>uploading...</strong>
                    </UploadContainer>
                }

                { !file.uploading && !file.deleting &&
                    <FileContainer>
                        <ElementsContainer>
                            <a href={file.url}>
                                <MdInsertDriveFile size={22} color="#A5CFFF" />
                                <strong>{file.title}</strong>
                            </a>            
                            <span>
                                Há {distanceInWords(file.createdAt, new Date(), { locale: pt })}
                            </span>
                        </ElementsContainer>
                        { actions &&
                            <ActionsContainer>
                                <button onClick={() => props.handleRemove(file)}>
                                    <img src={remove} alt="Excluir"/>                        
                                </button>                                
                            </ActionsContainer>
                        }
                    </FileContainer>
                }

                { file.deleting &&
                    <DeleteContainer>
                        <span>{file.title}</span>
                        <strong>deleting...</strong>
                    </DeleteContainer>
                }
            </Container>
        </li>
    )
}

export default File;