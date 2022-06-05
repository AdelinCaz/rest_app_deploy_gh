import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import{Link} from "react-router-dom";


function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(()=>{
        getPopular();
    },[])

    const getPopular = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v2/9973533/latest.php`);
        const data = await api.json();
        setPopular(data.meals);
        console.log(data.meals);
};   

  return (
      <Wrapper>
          <h4>Popular Picks</h4>
          <Splide options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "1rem"

          }}>
      {
          popular.map(recipe => {
              return(
                  <SplideSlide key={recipe.idMeal}>
                  <Card >
                          <Link to={"/recipe/"+recipe.idMeal}>
                    <p>{recipe.strMeal}</p>
                      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                          <Gradient/>
                          </Link>
                  </Card>
                  </SplideSlide>
              )
          })
      }
          </Splide>
      </Wrapper>
  )
};

const Wrapper = styled.div`
    margin: 4rem 0rem;

    
`;
    
const Card = styled.div`
    min-height: 20rem;
    min-width: 15rem;
    border-radius: 5px;
    position: relative;
    border: 1px solid grey;

    @media  (max-width: 1858px) {
        min-height: 10rem;
    min-width: 10rem;
    }
    @media  (max-width: 1362px) {
        min-height: 5rem;
    min-width: 5rem;
    }
        
    
 
    img {
    border-radius: 5px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`;


const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    border-radius:5px;
    width: 100%;
    height: 100%;
    
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

 




export default Popular;
