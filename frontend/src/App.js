import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/ProductsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main className="mt-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<Products />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">
          <p>All Right Resverved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
