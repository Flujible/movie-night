import StyledHeader from "./Header.style";
import styled from 'styled-components';

const StyledH1 = styled.h1`
    margin: 0;
    padding: 15px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledH1>Movie Night</StyledH1>
        </StyledHeader>
    );
}

export default Header;