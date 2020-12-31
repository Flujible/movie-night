import './App.scss';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import Library from './components/Library/Library';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content" role="main">
        <LeftPanel/>
        <Library/>
      </div>
    </div>
  );
}

export default App;
