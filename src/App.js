import './App.css';
import './fonts.css';
import Navbar from './UI/Navbar/Navbar';
import styled from "styled-components";
import Home from "./Pages/Home/Home";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import {useRoutes} from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 120px 75px;
  padding-top: 80px;
  flex-wrap: wrap;
`

function App() {

    const routersConfig = [{
        path: "/",
        element: <Home/>
    }, {
        path: '/movie/:mediaType/:movieId',
        element: <DetailsPage />,
    }]

    let routers = useRoutes(routersConfig)
    return (<div className="App">
        <Navbar/>
        <Container>
            {routers}
        </Container>
    </div>);
}

export default App;
