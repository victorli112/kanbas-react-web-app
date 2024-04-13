import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface ToDo {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
}
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithArrays() {
  const API = `${API_BASE}/a5/todos`;
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState<ToDo[]>([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const removeTodo = async (todo: ToDo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos((prevTodos: ToDo[]) => [...prevTodos, response.data]);
  };
  const deleteTodo = async (todo: ToDo) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const updateTodo = async () => {
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  return (
    <div>
      <h3>Working with Arrays</h3>
      ID{" "}
      <input
        type="number"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: parseInt(e.target.value),
          })
        }
      />
      <br />
      Title{" "}
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />{" "}
      <br />
      Completed{" "}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: e.target.checked,
          })
        }
      />{" "}
      <br />
      Description{" "}
      <input
        type="text"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`}>
        Update Title to {todo.title}
      </a>{" "}
      <br />
      <a href={`${API}/${todo.id}/completed/${todo.completed}`}>
        Update Completed to {todo.completed.toString()}
      </a>{" "}
      <br />
      <a href={`${API}/${todo.id}/description/${todo.description}`}>
        Update Description to {todo.description}
      </a>{" "}
      <br />
      <h4>Retrieving Arrays</h4>
      <a href={API}>Get Todos</a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <a href={`${API}/${todo.id}`}>Get Todo by ID</a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`}>Get Completed Todos</a>
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`}>Create Todo</a>
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>{" "}
      <br />
      <button onClick={createTodo}>Create Todo</button>
      <button onClick={updateTitle}>Update Title</button>
      <br />
      <textarea
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />{" "}
      <br />
      <input
        value={todo.due}
        type="date"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
      />{" "}
      <br />
      <label>
        <input
          value={todo.completed.toString()} // Convert boolean value to string
          type="checkbox"
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
        />
        Completed
      </label>{" "}
      <br />
      <button onClick={postTodo}> Post Todo </button> <br />
      <button onClick={updateTodo}>Update Todo</button> <br />
      <button onClick={() => deleteTodo(todo)} className="btn btn-danger">
        Delete
      </button>
      <ul>
        {todos.map((todo: ToDo) => (
          <li key={todo.id}>
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button onClick={() => removeTodo(todo)}>Remove</button>
            <button onClick={() => fetchTodoById(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;
