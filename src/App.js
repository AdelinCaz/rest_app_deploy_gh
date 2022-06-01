import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import {BrowserRouter} from "react-router-dom"
import styled from "styled-components";
import {Link} from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container-app">
        <Nav>
          <GiKnifeFork/>
          <Logo to={"/"}>Restaurant</Logo>
        </Nav>
      <Search/>
      <Category/>
      <Pages/>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

const Logo =styled(Link)`

text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: "Lobster Two", cursive;
text-decoration: none;
color: black;
`

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content:flex-start;
align-items: center;
svg{
  font-size:2rem;
}

`
export default App;
