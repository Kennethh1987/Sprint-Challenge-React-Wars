import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import StarCard from "./components/StarCard"


const App = () => {
  const [people, setPeople] = useState([]);


  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results)
        setPeople(response.data.results)
      })
      .catch(error => [
        console.log(error => [console.log("Error, error!", error)])
      ])
  }, []);

  
  return ( 
  <div className ="persons"> 
  
      {people.map((persons,index ) => {
        return ( 
            <StarCard key={index}name={persons.name}height={persons.height} />
        )
      })} 
     

  
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div> 
    </div>
  );
}

export default App;
