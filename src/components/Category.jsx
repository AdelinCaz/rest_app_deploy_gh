import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Category() {
  return (
      <List>
          <SLink to={"/cuisine/Italian"}>
          <FaPizzaSlice/>
          <h4>Italian</h4>
          </SLink>
          <SLink to={"/cuisine/American"}>
              <FaHamburger/>
          <h4>American</h4>
          </SLink>
          <SLink to={"/cuisine/Thai"}>
              <GiNoodles/>
          <h4>Thai</h4>
          </SLink>
          <SLink to={"/cuisine/Japanese"}>
              <GiChopsticks/>
          <h4>Japanese</h4>
          </SLink>
      </List>
  )
};

const List = styled.div`
    
    display:flex;
    justify-content:center;
    margin: 2rem auto;
    width: 100%;

`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
    margin: 3rem auto;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width:6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    @media (max-width: 488px) {
        width: 4rem;
        height: 4rem;
    }
    
        
    
    h4{
        color: white;
        font-size: 0.9rem;
        margin-top: 0.3rem;
        @media (max-width: 488px) {
        font-size: 0.5rem;
    }

    }
    svg{
        color: white;
        font-size: 1.5rem;
        padding-top: 0.8rem;
        margin: 0 auto;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`

export default Category;
