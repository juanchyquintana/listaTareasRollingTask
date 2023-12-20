import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {

  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    

  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ej: cocinar, estudiar, programar, etc."
            minLength={3}
            maxLength={50}
            value={tarea}
            onChange={e => setTarea(e.target.value)}
          />
          <Button
            variant="success"
            type="submit"
            onClick={handleSubmit}
            className="ms-2"
          >
            Agregar
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Formulario;
