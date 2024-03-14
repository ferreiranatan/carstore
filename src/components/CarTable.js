import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CarTable = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cars')
      .then(res => {
        setCars(res.data.cars);
      })
      .catch(error => {
        console.error('Erro ao buscar carros:', error);
      });
  }, []); 

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Marca</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Ano</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Cor</TableCell>
            <TableCell>Quilometragem</TableCell>
            <TableCell>Placa</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell>Foto</TableCell>
            <TableCell>Data de Cadastro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars && cars.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.brand}</TableCell>
              <TableCell>{car.model}</TableCell>
              <TableCell>{car.year}</TableCell>
              <TableCell>{car.price}</TableCell>
              <TableCell>{car.color}</TableCell>
              <TableCell>{car.mileage}</TableCell>
              <TableCell>{car.plate}</TableCell>
              <TableCell>{car.city}</TableCell>
              <TableCell>
                <ul>
                  {car.photos && car.photos.map((foto, index) => (
                    <li key={index}>
                      <img src={foto} alt={`Foto ${index}`} />
                    </li>
                  ))}
                </ul>
              </TableCell>
              <TableCell>{car.registration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CarTable;
