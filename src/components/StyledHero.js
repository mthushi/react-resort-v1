import styled from 'styled-components';
import defaultImg from '../images/room-12.jpeg'

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
    // if that prop is not given, pass this default image
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledHero
