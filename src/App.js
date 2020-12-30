import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
const StyledBody = styled.div`
  display: flex;
  height: calc(100% - 75px);
`;

function App() {
  return (
    <div className="App">
      <Header/>
      <StyledBody>
        <LeftPanel/>
      </StyledBody>
    </div>
  );
}

export default App;
