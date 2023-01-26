import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import NavBar from "./components/NavBar";
import NewProduct from "./components/NewProduct";
import { Container } from "@mui/material";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Container>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/new" element={<NewProduct />} />
          </Routes>
        </Container>
    </BrowserRouter>
  );
}

