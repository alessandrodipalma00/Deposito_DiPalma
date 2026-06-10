import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TodoForm } from "./component/TodoForm";
import { TodoList } from "./component/TodoList";


function App() {
  
  const linkStyle = {
  textDecoration: "none",
  color: "#007bff",
  fontWeight: "bold",
  padding: "5px 10px",
  border: "1px solid #007bff",
  borderRadius: "4px"
};

  return (
    <Router>
      <div style={{ padding: "30px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
        
        
        <header style={{ marginBottom: "30px", borderBottom: "2px solid #eee", paddingBottom: "15px" }}>
          <h1>To do List con Zustand</h1>
          <nav style={{ display: "flex", gap: "15px" }}>
            <Link to="/" style={linkStyle}>Visualizza Lista</Link>
            <Link to="/add" style={linkStyle}>Aggiungi una Task</Link>
          </nav>
        </header>

        
        <main>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/add" element={<TodoForm />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}



export default App;