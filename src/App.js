import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/Order/Order";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Order />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
