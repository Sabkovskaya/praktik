import Header from './component/Header'
import {Routes, Route} from "react-router-dom";
import Main from '../src/pages/main';
import Profil from '../src/pages/Profil';
import Regictration from '../src/pages/Regictration';
import Add_pet from '../src/pages/Add_pet';
import Search from '../src/pages/Search';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/profil' element={<Profil/>}/>
        <Route path='/region' element={<Regictration/>}/>
        <Route path='/add_pet' element={<Add_pet/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>

    </div>
  );
}

export default App;
