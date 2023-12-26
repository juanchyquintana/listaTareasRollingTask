import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Image } from "react-bootstrap";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import ListaTarea from "./components/listaTarea";

import logoSimpsons from "./assets/logoLosSimpsons.png";
import Frase from "./components/Frase";

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

      <Container className="text-center">
        <Image
          src={logoSimpsons}
          alt="logo simpsons"
          className="img-fluid w-25"
        />

        <Frase />

        <Button
          type="submit"
          className="btn btn-warning text-white text-uppercase fw-bold w-50"
        >
          Obtener Frase
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default App;
