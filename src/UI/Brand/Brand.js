import logo from '../../assets/img/logo.svg'
import styled from 'styled-components'


const BrandStyle = styled.div`
display: flex;
img {
    width : 40px;
    height: 40px
}
`

// const Title = styled.div`
//     display:flex;
//     font-size:48px;
// `

// const FirstPartTitle = styled.div`
//     color:#7B6EF6;
//     margin-right:5px;
// `

// const SecondPartTitle = styled.div`
//     color:#1EA5FC;
// `


const Brand = ({withTitle=true}) => {
    return (
        <BrandStyle>
            <img src={logo} alt = 'logo'/>
            {/* {withTitle && 
            <Title>
                <FirstPartTitle>Maile</FirstPartTitle>
                <SecondPartTitle>Hereko</SecondPartTitle>    
            </Title>} */}
        </BrandStyle>
    )
}

export default Brand;