// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import Club from './components/Club/Club';
import Header from './components/Header/Header';
import Question from './components/Question/Question';

function App() {
  return (
    <div >
      <Header></Header>
      <Club></Club>
      <Question></Question>
    </div>
  );
}

export default App;
