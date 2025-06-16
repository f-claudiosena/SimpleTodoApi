import React, { useState, useEffect } from 'react';
import './App.css';

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = () => {
    if (!newTodo.trim()) return;
    
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title: newTodo, 
        isCompleted: false 
      })
    })
      .then(res => res.json())
      .then(data => setTodos([...todos, data]));
    
    setNewTodo('');
  };

  const deleteTodo = (id: number) => {
    if (!window.confirm('Tem certeza que deseja deletar esta tarefa?')) return;
    
    fetch(`/api/todos/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setTodos(todos.filter(t => t.id !== id));
      });
  };

  const toggleTodo = (id: number) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        ...todo, 
        isCompleted: !todo.isCompleted 
      })
    })
      .then(() => {
        setTodos(todos.map(t => 
          t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
        ));
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Gerenciador de Tarefas</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Nova tarefa..."
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button onClick={addTodo}>
            <span>+</span> Adicionar
          </button>
        </div>
      </header>

      <ul className="todo-list">
        {todos.map(todo => (
          <li 
            key={todo.id} 
            className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}
          >
            <span 
              className="todo-text"
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.title}
            </span>
            <button 
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;