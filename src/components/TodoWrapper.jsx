import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";
import ExportCSV from "./ExportCSV"; // 匯入 ExportCSV 組件

function TodoWrapper() {

    const [todos, setTodos] = useState([
        {content: '範例(請忽略並刪除此項)', id: Math.random(),
        isCompleted: false, isEditing: false},
    ]);
    const addTodo = (content) => {
        setTodos([...todos, {content: content, id: Math.random(), isEditing: false}])
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) =>{
        return todo.id ===id
            ? {...todo, isCompleted: !todo.isCompleted}
            : todo
        }))
    }
    const toggleIsEditing = (id) => {
        setTodos(todos.map((todo) =>{
            return todo.id ===id
                ? {...todo, isEditing: !todo.isEditing}
                : todo
            }))

    }
    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) =>{
            return todo.id === id
            ? {...todo, content: newContent, isEditing: false}
            : todo
        }))
    }

  return (
    <div className="wrapper">
      <h1>荼毒李斯特</h1>
      <CreateForm addTodo={addTodo}/>
      {todos.map((todo) => {
        return <Todo toggleCompleted={toggleCompleted}
        toggleIsEditing={toggleIsEditing} editTodo= {editTodo}
        todo={todo} key={todo.id} deleteTodo={deleteTodo}/>
      })}
      
      {/* 使用 ExportCSV 組件，將 todos 當作 props 傳入 */}
      <ExportCSV todos={todos} />
    </div>
  );
}

export default TodoWrapper;
