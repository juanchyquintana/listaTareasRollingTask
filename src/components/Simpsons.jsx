import { Button, Image } from "react-bootstrap";
import logoSimpsons from "../assets/logoLosSimpsons.png";
import Frase from "./Frase";
import { useEffect, useState } from "react";

const Simpsons = () => {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
        const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
        const respuesta = await fetch(url);
        const data = await respuesta.json();

        setPersonaje(data[0]);
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <>
      <Frase personaje={personaje} />

      <Button
        type="submit"
        className="btn btn-warning text-white text-uppercase fw-bold w-50"
        onClick={consultarAPI}
      >
        Obtener Frase
      </Button>
    </>
  );
};

export default Simpsons;
