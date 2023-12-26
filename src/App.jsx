import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import ListaTarea from "./components/listaTarea";

function App() {
  return (
    <>
      <Container className="my-5 mainPage" id="main">
        <h1 className="text-center text-uppercase text-white">
          Lista de Tareas
        </h1>

        <Formulario />
        
        <ListaTarea />

      </Container>
      <Footer />
    </>
  );
}

export default App;
