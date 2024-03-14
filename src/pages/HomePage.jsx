import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('/cars')
        .then(res => {
            setCars(res.data)
        })
        .catch(error => {
            console.error('Erro ao buscar carros:', error);
        })
    },[])
    return (
        <>
            {}
        </>
    )
}

export default HomePage;