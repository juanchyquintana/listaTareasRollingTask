import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({tareas}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between ">
      {tareas}<Button variant="danger">Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
