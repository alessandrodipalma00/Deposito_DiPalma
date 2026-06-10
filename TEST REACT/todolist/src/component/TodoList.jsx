import { useTodoStore } from "../store/useTodoStore"
import { useEffect } from "react";

export function TodoList() {

  const { todos, loading, error, toggleTodoCompletion, deleteTodo } = useTodoStore();

  const fetchTodos = useTodoStore((state) => state.fetchTodos);
  
    
    useEffect(() => {
      fetchTodos();
    }, [fetchTodos]);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p style={{ color: "red" }}>Errore: {error}</p>;
  if (todos.length === 0) return <p>Nessun impegno rimasto! 🎉</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((t) => (
        <li
          key={t.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #eee",
            maxWidth: "400px"
          }}
        >
          
          <span
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              color: t.completed ? "gray" : "black",
            }}
          >
            {t.todo}
          </span>

          <div>
        
            <button
              onClick={() => toggleTodoCompletion(t.id)}
              style={{ marginRight: "5px", backgroundColor: t.completed ? "#ffc107" : "#28a745", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
            >
              {t.completed ? "Riapri" : "Fatto"}
            </button>

            
            <button
              onClick={() => deleteTodo(t.id)}
              style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
            >
              Elimina
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}