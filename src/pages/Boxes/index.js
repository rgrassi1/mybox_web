import React, { useState, useEffect, useReducer, useContext } from 'react';
import BoxesContext from '../../context/boxes_context';
import reducer from '../../reducer/boxes_reducer';
import { fetchBoxes } from '../../actions';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg';
import { Container, Content } from '../../styles/components';
import { 
    BoxesGeneralContainer,
    BoxesHeaderContainer,
    BoxesLoadContainer,
    BoxesNewBoxContainer,
    BoxesContainer,
} from './styles';

const Boxes = props => {

    /*const [boxes, setBoxes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBoxes();
    }, [])

    const fetchBoxes = async() => {
        setLoading(true);
        const response = await api.get('/boxes');
        setLoading(false);
        setBoxes(response.data);
    }

    const renderBox = box => {
        const data = new Date(box.createdAt);
        return (
            <li key={box._id}>
                <span><strong><Link to={`/boxes/${box._id}`}>{box.title}</Link></strong></span>
                <span>{`${data.toLocaleDateString()} ${data.toLocaleTimeString()}`}</span>
            </li>
        )
    }*/

    const [ state, dispatch ] = useReducer(reducer, { boxes: [] }); 

    const fetch = async() => {
        await fetchBoxes(dispatch);
        console.log(state)
    }

    useEffect(() => {
        fetch();
    }, [])

    //console.log(JSON.stringify(state))


    return (
        <BoxesContext.Provider value={{ boxes: state }}>
            <List />
        </BoxesContext.Provider>
        /*<BoxesGeneralContainer>
            <BoxesHeaderContainer>
                <img src={logo} alt=""/>
                <h1>Boxes on the System</h1>
            </BoxesHeaderContainer>
            { loading &&
                <BoxesLoadContainer>    
                    <img src={load} alt=""/>
                </BoxesLoadContainer>
            }
            <BoxesNewBoxContainer>
                <Link to="/"><strong>Criar novo box >></strong></Link>
            </BoxesNewBoxContainer>
            { !loading &&
                <Container>    
                    <Content>    
                        <BoxesContainer>
                            { boxes.length > 0 
                                ? boxes.map(box => renderBox(box)) 
                                : <li>Nehum box encontrado!</li> 
                            }
                        </BoxesContainer>
                    </Content>
                </Container>
            }
        </BoxesGeneralContainer>*/
    )
}

export default Boxes;

const List = props => {
    const context = useContext(BoxesContext);
    //console.log(context)
    return (
        <h1>{JSON.stringify(context)}</h1>
    )
}