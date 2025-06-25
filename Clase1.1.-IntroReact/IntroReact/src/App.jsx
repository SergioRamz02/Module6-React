import './App.css'
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from './Components/Card'
import Counter from './Components/Counter';
import FilterableList from './Components/FilterableList';
import Timer from './Components/Timer';
import ConditionalSquare from './Components/ConditionalSquare';
import SquareContainer from './Components/SquareContainer';
import FocusInput from './Components/FocusInput';
import Parent from './Components/UseCallbackExample';
import ContadorReducer from './Components/ContadorReducer';
import Nav from './Components/Nav';
import User from './Components/User';


const alt = "cat-image";

function App() {


  const [counter, setCounter] = useState(0);
  const [squareCounter, setSquareCounter] = useState(0);


  return (
    <>
    <BrowserRouter>
      <h1>Este es mi primer componente:</h1>
      <Card 
          src={"https://inaturalist-open-data.s3.amazonaws.com/photos/129658776/original.jpg"} 
          alt={alt} 
          text ={"Gato 1"} 
      />
      <Card 
          src={"https://nupec.com/wp-content/uploads/2021/12/domestic-cat-EABDSUL-1024x779.jpg"} 
          alt={alt}
          text={"Gato 2"} 
      />
      <Card 
          src={"https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1900&h=1267"} 
          alt={alt} 
          text={"Gato 3"}
      />
      <Nav/>
      
      <Routes>
        <Route path='/' element={function Home (){return(<h1>Hola</h1>)}}/>
        <Route path='/Counter' element={<Counter counter={counter} setCounter={setCounter}/>} />
        <Route path='/FilterableList' element={<FilterableList />} />
        <Route path='/Timer' element={<Timer />} />
        <Route path='/User/:userId' element={<User/>}></Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
