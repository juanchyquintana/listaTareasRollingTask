import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Formulario from './components/Formulario'

function App() {

  return (
    <>
      <Container className='my-5 mainPage' id="main">
        <h1>Lista de Tareas</h1>
        <Formulario />
        
      </Container>

      <Footer />
    </>
  )
}

export default App
