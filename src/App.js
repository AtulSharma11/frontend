import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main className="py-3">
                <Container>
                  <HomeScreen />
                </Container>
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
