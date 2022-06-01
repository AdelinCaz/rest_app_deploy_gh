import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import {Link} from "react-router-dom";


function Searched() {


    let params = useParams();

    const [searchedRecipes, setSearchedRecipe] = useState([]);
    const getSearched = async (name) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${name}`);
        const recipes = await data.json();
        setSearchedRecipe(recipes.meals);
        console.log(searchedRecipes);
        
    };
    useEffect(()=>{
        getSearched(params.search);
    }, [params.search]);


  return (
      <Grid>
          {searchedRecipes.map((item) => {
              return (
                  <Card key={item.idMeal}>
                      <Link to={"/recipe/" + item.idMeal}>
                      <img src={item.strMealThumb} alt="" />
                      <h4>{item.strMeal}</h4>
                      </Link>
                  </Card>
              )
          })};
      </Grid>
  )
};


const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align:center;
        padding: 1rem;
    }
`
export default Searched;