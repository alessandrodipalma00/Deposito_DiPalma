import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import {useNavigate} from 'react-router-dom'

export function TodoForm() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;


    await addTodo({ todo: text, userId: 5 }); 
    setText(""); // Svuota l'input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Cosa devi fare oggi?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>Aggiungi</button>
      <button 
          type="button" onClick={() => navigate(-1)}
          style={{ 
            padding: "8px 12px", 
            backgroundColor: "#6c757d", 
            color: "white", 
            border: "none", 
            cursor: "pointer" 
          }}
        >Torna indietro</button>
    </form>
  );
}