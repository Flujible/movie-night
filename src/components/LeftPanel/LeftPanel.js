import StyledPanel from "./LeftPanel.style";
import styled from 'styled-components';

const StyledH2 = styled.h2`
    margin: 0;
    padding: 15px;
`;

const Header = () => {
    return (
        <StyledPanel>
            <StyledH2>My night</StyledH2>
        </StyledPanel>
    );
}

export default Header;