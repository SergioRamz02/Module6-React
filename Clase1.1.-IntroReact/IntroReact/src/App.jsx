import './App.css'
import { useState } from 'react';
import Card from './Components/Card'
import Counter from './Components/Counter';
import FilterableList from './Components/FilterableList';
import Timer from './Components/Timer';
import ConditionalSquare from './Components/ConditionalSquare';
import SquareContainer from './Components/SquareContainer';
import FocusInput from './Components/FocusInput';
import Parent from './Components/UseCallbackExample';
import ContadorReducer from './Components/ContadorReducer';

const alt = "cat-image";

function App() {


  const [counter, setCounter] = useState(0);
  const [squareCounter, setSquareCounter] = useState(0);


  return (
    <>
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
      <Counter counter={counter} setCounter={setCounter}/>
      <FilterableList />
      <Timer />
      <h1>Contador de los cuadros</h1>
      <Counter counter={squareCounter} setCounter={setSquareCounter}/>
      <SquareContainer>
        {Array.from({ length: squareCounter }, (_, index) => (
          <ConditionalSquare key={index} />
        ))}
      </SquareContainer>
      <FocusInput />
      <Parent></Parent>
      <ContadorReducer />
    </>
  )
}

export default App
