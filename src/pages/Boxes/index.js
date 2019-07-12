import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import List from './List/index';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg';
import { 
    BoxesGeneralContainer,
    BoxesHeaderContainer,
    BoxesNewBoxContainer,
    BoxesInfoContainer,
    BoxesLoadContainer
} from './styles';

const Boxes = props => {    
    const { fetching, error, message, data } = useFetch('/restrito/boxes');    

    return (
        <BoxesGeneralContainer>
            <BoxesHeaderContainer>
                <img src={logo} alt=""/>
                <h1>Boxes on the System</h1>
            </BoxesHeaderContainer>
            <BoxesNewBoxContainer>
                <Link to="/"><strong>Criar novo box >></strong></Link>
            </BoxesNewBoxContainer>
            { fetching &&   
                <BoxesLoadContainer>
                    <img src={load} alt=""/>
                </BoxesLoadContainer>  
            }
            { data && !fetching &&
                <List boxes={data}/>
            } 
            { error &&
                <BoxesInfoContainer>
                    <p><strong>{message}</strong></p> 
                </BoxesInfoContainer>
            }
            { !data && !fetching &&
                <BoxesInfoContainer>
                    <p><strong>Nenhum box encontrado!</strong></p> 
                </BoxesInfoContainer>
            } 
        </BoxesGeneralContainer>
    )
}

export default Boxes;