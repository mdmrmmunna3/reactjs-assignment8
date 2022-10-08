import './App.css';
import ClubContainer from './components/ClubContainer/ClubContainer';
import Header from './components/Header/Header';
import ReactQuestion from './components/ReactQuestion/ReactQuestion';

function App() {
  return (
    <div >
      <Header></Header>
      <ClubContainer></ClubContainer>
      <ReactQuestion></ReactQuestion>
    </div>
  );
}

export default App;
