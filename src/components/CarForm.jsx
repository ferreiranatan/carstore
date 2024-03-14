import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const CarForm = ({onsubmit})=>{
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        year: '',
        price: '',

    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onsubmit(formData);
        setFormData({
            brand:'',
            model:'',
            year: '',
            price:'',
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
          <Button type="submit" variant="contained" color="primary">Enviar</Button>
        </Grid>
      </Grid>
        </form>
        </form>

    )
}

export default CarForm;