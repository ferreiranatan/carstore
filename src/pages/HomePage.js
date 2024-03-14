import { useState, useEffect } from "react";
import axios from "axios";
import CarTable from "../components/CarTable";

const HomePage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cars')
      .then((res) => {
        setCars(res.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar carros:', error);
      });
  }, []);
  return (
    <div>
      <h2>Ofertas</h2>
      <CarTable cars={cars}/>
    </div>
  );
};

export default HomePage;
