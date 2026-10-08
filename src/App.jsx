import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Create a website", done: false },
    { id: 2, text: "Add CSS styling", done: false },
    { id: 3, text: "Add images to the page", done: false },
  ]);
 const [draft, setDraft] = useState("");
}