import './App.css'
import Card from './Components/Card'
import Counter from './Components/Counter';
import FilterableList from './Components/FilterableList';
import Timer from './Components/Timer';

const alt = "cat-image";

function App() {


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
      <Counter />
      <FilterableList />
      <Timer />
    </>
  )
}

export default App
