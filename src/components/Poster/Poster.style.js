import styled from 'styled-components';

const StyledPoster = styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 342px;
    height: 513px;
    border-radius: 20px;
    margin: 15px;
`;

export default StyledPoster; 