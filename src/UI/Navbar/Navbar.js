import styled from 'styled-components'
import Brand from '../Brand/Brand';

const NavbarStyle = styled.div`
    display:flex;
    justify-content:space-between;
    color:#A8AEBF;
    height:80px;
    align-items:center;
    margin: 16px 120px;
    


`

const Menu = styled.div`
ul{
    display:flex;
    margin-right:40px;
}
ul li{
    margin:0px 16px;
}
`



const Navbar = () =>{
    return (
        <NavbarStyle>
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
        </NavbarStyle>
    )
}

export default Navbar;