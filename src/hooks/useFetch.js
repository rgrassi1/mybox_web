/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import api from '../services/api'

export function useFetch(url, options = {}) {
    const [ response, setResponse ] = useState({ 
        fetching: false,
        error: false,
        message: null,
        data: null 
    });
    
    useEffect(() => {
        const fetchData = async() => {
            setResponse({ ...response, fetching: true });
            try {
                const res = await api.get(url, options);
                setResponse({ ...response, data: res.data, fetching: false });
            } catch (err) {
                setResponse({ ...response, error: true, message: err.message })   
            }
        }
        fetchData();
    }, [])
    return response
}