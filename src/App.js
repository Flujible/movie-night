import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import Library from './components/Library/Library';

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
        <Library/>
      </StyledBody>
    </div>
  );
}

export default App;
