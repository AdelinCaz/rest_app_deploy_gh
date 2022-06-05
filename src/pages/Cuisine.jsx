import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import{motion} from "framer-motion";
import {Link, useParams} from "react-router-dom";



function Cuisine() {

    let params = useParams();
    const [cuisine, setCuisine] = useState([]);
    const getCuisine = async (name) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v2/9973533//filter.php?a=${name}`) 
        const recipes = await data.json();
        setCuisine(recipes.meals);  
        
    }

    useEffect(()=>{
        getCuisine(params.type);
        console.log(params.type);
        console.log(cuisine);
    },[params.type])

  return (
      <Grid>{cuisine.map((item) => {
          return (
              <Card key={item.idMeal}>
                  <Link to={"/recipe/" + item.idMeal}>
                      <div className='img-wrapper'>
                  <img src={item.strMealThumb} alt="" />
                      </div>
                  <h4>{item.strMeal}</h4>
                  </Link>
              </Card>
          )
      })

      }</Grid>
  )
}

const Grid= styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
    @media (max-width: 488px){
        display: flex;
        flex-direction: column;
    }
`;
const Card = styled.div`
    
    margin: 0 auto;
    .img-wrapper{
        width:100%;
        @media (max-width: 488px){
        margin: 0 auto;
        width:10rem;
        height: 10rem;
        }
    }
    img{
        width: 100%;
        border-radius: 5px;
        border: 1px solid grey;
        object-fit: cover;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align:center;
        padding: 1rem;
        @media (max-width: 488px) {
            padding:0px;
        }
    }
`

export default Cuisine