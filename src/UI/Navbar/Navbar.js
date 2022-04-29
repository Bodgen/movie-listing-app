import styled from 'styled-components'
import Brand from '../Brand/Brand';
import {Link} from "react-router-dom";

const NavbarStyles = styled.nav`
  color: #A8AEBF;
  height: 80px;
  background-color: rgba(18, 24, 41, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 120px 0;
  z-index: 200;

  .brand {
    cursor: pointer;
  }
`

const Menu = styled.div`
  ul {
    display: flex;
    margin-right: 40px;

  }

  ul li {
    transition: all .5s;
    margin: 0px 16px;
  }

  ul li:hover {
    cursor: pointer;
    color: #7B6EF6;
  }

`

const Navbar = () => {
    return (
        <NavbarStyles>
            <NavbarContainer>
                <div className='brand'>
                    <Link to='/'>
                        <Brand/>
                    </Link>
                </div>
                <Menu>
                    <ul>
                        <li>
                            <h6>
                                Movies
                            </h6>
                        </li>
                        <li>
                            <h6>
                                TV Shows
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Suggest me
                            </h6>
                        </li>
                    </ul>
                </Menu>
            </NavbarContainer>
        </NavbarStyles>
    )
}

export default Navbar;