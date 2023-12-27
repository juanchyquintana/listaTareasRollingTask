import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({ tareas }) => {
  return (
    <>
      <ListGroup>
        {
          tareas.map((tarea, posicionTarea) => (
            <ItemTarea 
              key={posicionTarea}
              tarea={tarea}
            />
          ))
        }
      </ListGroup>
    </>
  );
};

export default ListaTarea;
