import React, { useState, useEffect } from "react";
import axios from "axios";
import CarForm from "../components/CarForm";

const AdminPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    axios.get("http://localhost:3001/cars")
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar carros:", error);
      });
  };

  const handleAddCar = (formData) => {
    axios.post("http://localhost:3001/cars", formData)
      .then(res => {
        console.log("Carro adicionado", res.data);
        fetchCars(); // Atualiza a lista de carros após adicionar um novo
      })
      .catch(error => {
        console.error("Erro ao adicionar carro", error);
      });
  };

  const handleUpdateCar = (id, updatedCar) => {
    axios.put(`http://localhost:3001/cars/${id}`, updatedCar)
      .then(res => {
        console.log("Carro atualizado", res.data);
        fetchCars(); // Atualiza a lista de carros após atualizar
      })
      .catch(error => {
        console.error("Erro ao atualizar carro", error);
      });
  };

  const handleDeleteCar = (id) => {
    axios.delete(`http://localhost:3001/cars/${id}`)
      .then(res => {
        console.log("Carro excluído");
        fetchCars(); 
      })
      .catch(error => {
        console.error("Erro ao excluir carro", error);
      });
  };


  return (
    <div>
      <h2>Administração</h2>
      <CarForm onSubmit={handleAddCar} />
      <h3>Lista de Carros</h3>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.marca} {car.modelo} ({car.ano})
            <button onClick={() => handleUpdateCar(car.id, { ...car, preco: 20000 })}>Atualizar</button>
            <button onClick={() => handleDeleteCar(car.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
