import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import styled from "@emotion/styled";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(getAuth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerStyle>
      <FormStyle onSubmit={signUp}>
        <Title>Sign up to continue</Title>
        <InputStyle
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></InputStyle>
        <InputStyle
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputStyle>
        <BtnStyle type="submit">Sign Up</BtnStyle>
        <>
          <Paragraf>OR</Paragraf>
          <BoxButton>
            <button>Continue with Gmail</button>
            <button>Continue with Gmail</button>
            <button>Continue with Microsoft</button>
            <button>Continue with Apple</button>
            <button>Continue with Slack</button>
          </BoxButton>
        </>
      </FormStyle>
    </ContainerStyle>
  );
};

export default SignUp;

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const FormStyle = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 514px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const InputStyle = styled.input`
  max-width: 100%;
  font-weight: 600;
  padding: 17px 13px;
  background: #f9f9fa;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 3px solid rgba(245, 245, 245, 0.7);
  font-size: 17px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px hsla(0, 0%, 0%, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    border: 2px solid #0055cc;
  }
`;

const BtnStyle = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #0051cc;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #0051cc;
    animation: 0.2s ease-out forwards;
  }
`;

const Paragraf = styled.p`
  margin-top:10px
`
const BoxButton = styled.div`
  display: flex;
  flex-direction: column; 
  font-weight: 600;
  padding: 17px 13px;
  color: rgb(253, 249, 243);
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 1rem;
  padding-top:10px;
`;

const Title = styled.b`
  font-weight: normal;
  color: #29292a;
  padding: 1rem;
  text-align: center;
`;
