import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from "react-router-dom";

function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?c=Vegetarian`);
        const data = await api.json();
        setVeggie(data.meals);
        console.log(data.meals);
    };

    return (
        <Wrapper>
            <h4>Veggie Picks</h4>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "5rem"

            }}>
                {
                    veggie.map(recipe => {
                        return (
                            <SplideSlide key={recipe.idMeal}>
                                <Card >
                                    <Link to={"/recipe/" + recipe.idMeal}>
                                    <p>{recipe.strMeal}</p>
                                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                                    <Gradient />
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
    border-radius: 2rem;
    position: relative;
 
    img {
    width:370px;
    height:320px;
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
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;






export default Veggie;
