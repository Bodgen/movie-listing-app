import styled from 'styled-components'
import Brand from '../Brand/Brand';

const NavbarStyles = styled.div`
  color: #A8AEBF;
  height: 80px;
  backdrop-filter: blur(40px);

`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 120px 0;
`

const Menu = styled.div`
  ul {
    display: flex;
    margin-right: 40px;
  }

  ul li {
    margin: 0px 16px;
  }
`

const Navbar = () => {
    return (
        <NavbarStyles>
            <NavbarContainer>
                <Brand/>
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