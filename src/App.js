import styled from "styled-components";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import SignUp from "./components/signUp/auth/SignUp";
import AuthDetails from "./components/signUp/AuthDeteils";

function App() {
  return (
    <div className="App">
      <Header />
      <MainStyled>
        <AuthDetails />
        <SideBar />
        <Body />
      </MainStyled>
      <SignUp />
    
    </div>
  );
}

export default App;

const MainStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
