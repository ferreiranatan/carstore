import axios from "axios";
import CarForm from "../components/CarForm";


  const AdminPage =() =>{
    const handleSubmit =(formData)=>{
      axios.post('http://localhost:3000/cars', formData)
      .then(res => {
        console.log('Carro adicionado', res.data)
      })
      .catch(error => {
        console.error('Erro ao adicionar carro', error)
      })
    }
    
    return(
      <div>
        <h2>Administração</h2>
        <CarForm onsubmit={handleSubmit}/>
      </div>
    )
  
  }

  

export default AdminPage;
