import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const CarForm = ({ onsubmit }) => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    color:'',
    mileage:'',
    plate:'',
    city:'',
    photos:'',
    registration:''

  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit(formData);
    setFormData({
      marca: '',
      modelo: '',
      ano: '',
      preco: '',
      cor: '',
      quilometragem: '',
      placa: '',
      cidade: '',
      fotos: [],
      dataCadastro: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="brand"
              label="Marca"
              value={formData.brand}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="model"
              label="Modelo"
              value={formData.model}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="year"
              label="Ano"
              value={formData.year}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="price"
              label="Preço"
              value={formData.price}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="color"
              label="Cor"
              value={formData.color}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="mileage"
              label="Quilometragem"
              value={formData.mileage}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="plate"
              label="Placa"
              value={formData.plate}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="city"
              label="Cidade"
              value={formData.city}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="file"
              name="photos"
              aria-label="Fotos"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="dataCadastro"
              label="Data de Cadastro"
              type="date"
              variant="outlined"
              value={formData.registration}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Enviar</Button>
          </Grid>
        </Grid>
      </form>
    </form>

  )
}

export default CarForm;