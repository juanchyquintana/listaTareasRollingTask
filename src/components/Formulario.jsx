import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Error from "./Error";

const Formulario = () => {
  const [nombreTareas, setNombreTareas] = useState("");
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombreTareas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    setTareas([...tareas, nombreTareas])
    
    setNombreTareas('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {error && <Error>¡Introduce una tarea, por favor!</Error>}

        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ej: cocinar, estudiar, programar, etc."
            minLength={3}
            maxLength={50}
            value={nombreTareas}
            onChange={(e) => setNombreTareas(e.target.value)}
          />
          <Button variant="success" type="submit" className="ms-2">
            Agregar
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Formulario;
