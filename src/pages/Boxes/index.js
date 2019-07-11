import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { BoxesLoadContainer } from './List/styles';
import List from './List/index';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg';
import { 
    BoxesGeneralContainer,
    BoxesHeaderContainer,
    BoxesNewBoxContainer,
    BoxesErrorContainer,
} from './styles';

const Boxes = props => {
    const [ boxes, setBoxes ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        fetch();
    }, [])

    const fetch = async() => {
        setLoading(true);
        try {
            const token = localStorage.getItem('mybox_token');
            const response = await api.get('/restrito/boxes', {
                headers: { 'x-access-token': token }
            });
            setLoading(false);
            setBoxes(response.data);
        } catch(err) {
            setLoading(false);
            setError(true)
        }
    }

    return (
        <BoxesGeneralContainer>
            <BoxesHeaderContainer>
                <img src={logo} alt=""/>
                <h1>Boxes on the System</h1>
            </BoxesHeaderContainer>
            <BoxesNewBoxContainer>
                <Link to="/"><strong>Criar novo box >></strong></Link>
            </BoxesNewBoxContainer>

            { loading &&   
                <BoxesLoadContainer>
                    <img src={load} alt=""/>
                </BoxesLoadContainer>  
            }
            { boxes.length > 0 &&
                <List boxes={boxes}/>
            } 

            { boxes.length === 0 && !loading &&
                <BoxesErrorContainer>
                    <p><strong>Nenhum box encontrado!</strong></p> 
                </BoxesErrorContainer>
            } 

            { error && 
                <BoxesErrorContainer> 
                    <p><strong>Atualize a página para buscar os boxes.</strong></p> 
                </BoxesErrorContainer>
            }            

        </BoxesGeneralContainer>
    )
}

export default Boxes;