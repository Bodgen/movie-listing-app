import './App.css';
import './fonts.css';
import Navbar from './UI/Navbar/Navbar';
import CardPlaceholder from "./UI/CardPlaceholder/CardPlaceholder";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 120px 75px;
`


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Container>
                <CardPlaceholder/>
                <CardPlaceholder/>
                <CardPlaceholder/>
                <CardPlaceholder/>
                <CardPlaceholder/>
                <CardPlaceholder/>
                <CardPlaceholder/>
                <CardPlaceholder/>

            </Container>
        </div>
    );
}

export default App;
