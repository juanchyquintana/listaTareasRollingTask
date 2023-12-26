import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({tareas}) => {
  return (
    <>
      <ListGroup>
        <ItemTarea
          tareas={tareas}
        />
      </ListGroup>
    </>
  );
};

export default ListaTarea;
