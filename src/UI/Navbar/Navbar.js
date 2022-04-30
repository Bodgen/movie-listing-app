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

const Navbar = () => {
    return (
        <NavbarStyles>
            <NavbarContainer>
                <div className='brand'>
                    <Link to='/'>
                        <Brand/>
                    </Link>
                </div>
            </NavbarContainer>
        </NavbarStyles>
    )
}

export default Navbar;