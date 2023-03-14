import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question';
function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
   dispatch(fetchAllQuestions())
  },[dispatch])

  return (
    <div className="App">
     <Router>
      <Navbar/>
      <AllRoutes/>
     </Router>
    </div>
  );
}

export default App;
