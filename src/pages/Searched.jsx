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
        console.log(recipes);
        
    };
    useEffect(()=>{
        getSearched(params.search);
    }, [params.search]);


  return (
      <Grid>
          {searchedRecipes ? ( searchedRecipes.map((item) => {
              return (
                  <Card key={item.idMeal}>
                      
                      <Link to={"/recipe/" + item.idMeal}>
                      <img src={item.strMealThumb} alt="" />
                      <h4>{item.strMeal}</h4>
                      </Link>
                      
                  </Card>
              )
          })) : <Notfound ><h3>Ingredient Not Found! :( </h3></Notfound >  }
          
      </Grid>
  )
};


const Grid = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    margin: 0 auto;
    img{
        width: 100%;
        border-radius: 5px;
        border: 1px solid grey;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align:center;
        padding: 1rem;
    }
`
const Notfound = styled.div`
    margin:0 auto;
    h3{
        font-weight: 600;
        font-size: 25px;
    }
`
export default Searched;