import { TiDelete } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
import Editform from "./Editform";


function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo}) {
  return todo.isEditing ? (
    <Editform todo={todo} editTodo={editTodo}/>
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdModeEdit
          onClick={() => {toggleIsEditing(todo.id)}}
          style={{ cursor: "pointer" }} />
        <TiDelete
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}
export default Todo;
