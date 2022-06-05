import React from 'react'
import styled from 'styled-components'
import {useState} from "react";
import{FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Search() {


    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        navigate("/searched/" +input);
        setInput("");
    }


  return (
    
    
      <FormStyle onSubmit={submitHandler} >
        <div>
        
                <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} placeholder="Search.." />
        </div>
    </FormStyle>
  
  
  )
}

const FormStyle = styled.form`
    margin: 0rem auto;
    width: 50%;
     @media (max-width: 488px){
         width: 100%;
     }
    
    
    div{
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35DEG, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem auto;
        border: none;
        border-radius: 0.5rem;
        outline: none;
        width: 100%;
        
        height: 3rem;
        @media (max-width: 488px){
            font-size: 0.8rem;
            height: 2rem;
        }
    }
input::-webkit-input-placeholder {
    font-size: 15px;
    
    padding-left: 10px;
}
    
`;



export default Search