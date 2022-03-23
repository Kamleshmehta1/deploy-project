import './App.css';
import FetchAPI from "./Components/FetchAPI"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from './Components/TodoList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchAPI />} />
          <Route path="/page" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
