import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";

function Recipe() {
  const[item, setItem]= useState({});
  const[activeTab, setActiveTab] = useState("instructions");
  const {name} =useParams();
  
  const fetchDetails = async (name) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${name}`)
    const detailData = await data.json();
    setItem(detailData.meals[0]);
    console.log(item);
  }


useEffect(()=>{
fetchDetails(name);
},[name])

  return (
          
            <DetailWrapper >
                <div className='wrapper'>
                  <h2>{item.strMeal}</h2>
                  <div className='img-container'>
                    <img src={item.strMealThumb} alt="" />
                  </div>
                </div>  
                <Info>
                  <div className='button-wrapper'>
                   <Button className={activeTab==="instructions" ? "active" : ""} onClick={()=> setActiveTab("instructions")}>
                      Instructions
                   </Button>
                   <Button className={activeTab === "ingredients" ? "active" : ""} onClick={()=>setActiveTab("ingredients")}>
                      Ingredients
                   </Button>
                  </div>
                  {activeTab === "instructions" && (
                  <div className='info-text-div'>
                       <h3>{item.strInstructions}</h3>
                  </div>
        )}
                  {activeTab=== "ingredients" && (
                  <UlDiv >
                  <ul>
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
            <li>{item.strIngredient5}</li>
            <li>{item.strIngredient6}</li>
            <li>{item.strIngredient7}</li>
            <li>{item.strIngredient8}</li>
            <li>{item.strIngredient9}</li>
            <li>{item.strIngredient10}</li>
            <li>{item.strIngredient11}</li>
            <li>{item.strIngredient12}</li>
            <li>{item.strIngredient13}</li>
            <li>{item.strIngredient14}</li>
            <li>{item.strIngredient15}</li>
            <li>{item.strIngredient16}</li>
            <li>{item.strIngredient17}</li>
            <li>{item.strIngredient18}</li>
            <li>{item.strIngredient19}</li>
            <li>{item.strIngredient20}</li>
            
                  </ul>
                  <ul>
              <li>{item.strMeasure1}</li>
              <li>{item.strMeasure2}</li>
              <li>{item.strMeasure3}</li>
              <li>{item.strMeasure4}</li>
              <li>{item.strMeasure5}</li>
              <li>{item.strMeasure6}</li>
              <li>{item.strMeasure7}</li>
              <li>{item.strMeasure8}</li>
              <li>{item.strMeasure9}</li>
              <li>{item.strMeasure10}</li>
              <li>{item.strMeasure11}</li>
              <li>{item.strMeasure12}</li>
              <li>{item.strMeasure13}</li>
              <li>{item.strMeasure14}</li>
              <li>{item.strMeasure15}</li>
              <li>{item.strMeasure16}</li>
              <li>{item.strMeasure17}</li>
              <li>{item.strMeasure18}</li>
              <li>{item.strMeasure19}</li>
              <li>{item.strMeasure20}</li>
            
                </ul>
                </UlDiv>
        )}
        
                </Info>
            </DetailWrapper>
        
  )
}

const DetailWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .wrapper{
    margin: 0 auto;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    margin: 0 auto;
    h2{
      margin-left: 3rem;
    }
  }

  .img-container{
    width: 100%;
    min-height: 20rem;
    min-width: 15rem;
  }

  img{
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: 5px;
    object-fit: cover;
  }

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color:white;
  }

  h2{
    margin-bottom: 2rem;
  }

  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul{
    margin-top: 2rem;
  }
`
const Button = styled.button`
  width: 10rem;
  height: 4rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  @media( max-width: 1152px) {
    margin: 0 auto;
    width: 8rem;
  height: 2rem;
}

  @media (max-width: 560px) {
  margin: 1rem 3rem;
  width: 8rem;
  height: 2rem;
  }
`
  

const Info = styled.div`
  margin-left: 5rem;
  width: 100%;
  .info-text-div{
    margin-right: 0px;
  }

  h3{
    margin-top: 5rem;
    padding: 0px;
  }

  .button-wrapper{
    @media( max-width: 1152px) {
    width: 100%;
    margin: 0 auto;
}
    @media( max-width: 560px) {
    width: 100%;
    margin: 0 auto;
}
  }

  @media (max-width: 560px) {
    flex-direction: column;
    margin: 0 auto;
  }
  
  @media (max-width: 1330px) {
    flex-direction: column;
    margin: 0 auto;
  }
`
const UlDiv = styled.div`
  display: flex;
  
  li{
    list-style-type: none;
  }
`
export default Recipe