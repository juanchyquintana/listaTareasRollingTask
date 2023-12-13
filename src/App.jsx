import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Container className='my-5'>
        <h1>Lista de Tareas</h1>
      </Container>

      <Footer />
    </>
  )
}

export default App
