import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 22vw;
  height: 100vh;
  padding: 0 20px;
  background-image: linear-gradient(rgb(20,30,48), rgb(36,59,85));
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  label{
    color: #fff;
    font-size: 20px;
    margin-top: 20px;
    font-family: 'DM Sans', sans-serif;
  }

  input {
    background-color: #d9d9d9;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border:none;
    margin: 10px auto 20px;
    padding-left: 10px;
    outline: none;
    font-size: 14px;
  }

  button{
    margin: 40px auto;
    border-radius: 10px;
    background-color: #000000;
    border: 1px solid #fff;
    width: 100%;
    height: 60px;
    
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-size: 20px;
  }
  
  button:hover{
    background-color: #141E30;
    transition: all 0.5s ease-in;
  }

  ::placeholder{
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 40px;
  margin-left:auto;
  margin-right: auto;
`;

