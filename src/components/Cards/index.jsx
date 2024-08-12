import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/photoshinyagence.jpg'
import styled from "styled-components"
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
font-family: Trebuchet MS;
font-size: 22px;
font-weight: 400;
line-height: 25.54px;
color: ${colors.primary};
`

const CardImage = styled.img`
height: 150px;
width : 150px;
border-radius : 50%;
padding: 50px 0;`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardSpan = styled.span`
font-family: Trebuchet MS;
font-size: 25px;
font-weight: 400;
line-height: 29.03px;
text-align: center;
`

function Card({ label, title, picture }) {
    
    return (
        <CardWrapper>
           
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardSpan>{title}</CardSpan>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,

}

Card.defaultProps = {
    title : "",
    label : "",
    picture : DefaultPicture
}
 
export default Card