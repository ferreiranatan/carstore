import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CarTable = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cars")
      .then(res => {
        setCars(res.data);
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
              <TableCell>{car.marca}</TableCell>
              <TableCell>{car.modelo}</TableCell>
              <TableCell>{car.ano}</TableCell>
              <TableCell>{car.preco}</TableCell>
              <TableCell>{car.cor}</TableCell>
              <TableCell>{car.quilometragem}</TableCell>
              <TableCell>{car.placa}</TableCell>
              <TableCell>{car.cidade}</TableCell>
               <TableCell>
                <ul>
                  {car.fotos && car.fotos.map((foto, index) => (
                    <li key={index}>
                      <img src={foto} alt={`Foto ${index}`} />
                    </li>
                  ))}
                </ul>
              </TableCell> 
              <TableCell>{car.dataCadastro}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CarTable;
