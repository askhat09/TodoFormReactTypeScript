import React, {useState} from 'react';
import Navbar from './components/navbar';
import { TodoForm } from './components/todoform';
import { TodoList } from './components/todoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  )
}

export default App;
