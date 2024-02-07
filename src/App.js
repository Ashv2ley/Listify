import Home from "./components/Home"
import AllTasks from "./components/AllTasks"
import Personal from "./components/Personal"
import Work from "./components/Work"
import GroceryList from "./components/GroceryList"
import './App.css';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <>
        <Routes>
          <Route exact path='/tasks' element={<AllTasks/>}/>
          <Route exact path='/personal' element={<Personal/>}/>
          <Route exact path='/work' element={<Work/>}/>
          <Route exact path='/grocery-list' element={<GroceryList/>}/>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </>
  );
}

export default App;
