import './App.css';
import './fonts.css';
import Navbar from './UI/Navbar/Navbar';
import styled from "styled-components";
import Card from "./UI/Card/Card";
import Button from "./UI/Button/Button";
import CustomInput from "./UI/CustomInput/CustomInput";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 120px 75px;
  padding-top: 160px;
`


function App() {
    return (<div className="App">
        <Navbar/>
        <Container>
            <Card/>
            <Button/>
            <CustomInput/>
        </Container>
    </div>);
}

export default App;
