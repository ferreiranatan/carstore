import { useState, useEffect } from "react";
import axios from "axios";
import CarTable from "../components/CarTable";

const HomePage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("/cars")
      .then((res) => {
        setCars(res.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar carros:", error);
      });
  }, []);
  return (
    <>
      <h2>Ofertas</h2>
      <CarTable cars={cars}/>
    </>
  );
};

export default HomePage;
