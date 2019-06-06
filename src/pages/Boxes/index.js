import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context';
import { Link, Redirect } from 'react-router-dom';
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

    const { state } = useContext(UserContext);

    const [ boxes, setBoxes ] = useState(null);
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

    if (!state.isAuth) {
        return <Redirect to="/signin"/>
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
            {!loading && boxes &&
                <List boxes={boxes}/>
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