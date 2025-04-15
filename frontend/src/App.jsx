import { useState } from 'react'
import './App.css'
const animalSchools = [
  {
    name: "Jungle Paws Academy",
    species: "Lion",
    numberOfStudents: 30,
    location: "Savannah Plains",
    funFact: "They roar the school anthem every morning!"
  },
  {
    name: "Aqua Fins High",
    species: "Dolphin",
    numberOfStudents: 45,
    location: "Coral Reef Bay",
    funFact: "Classes are held underwater with bubble notes."
  },
  {
    name: "Featherstone Prep",
    species: "Eagle",
    numberOfStudents: 20,
    location: "Mountain Cliffs",
    funFact: "Students learn to fly before they can write!"
  },
  {
    name: "Burrow Elementary",
    species: "Rabbit",
    numberOfStudents: 60,
    location: "Greenwood Forest",
    funFact: "Recess tunnels connect all the classrooms."
  },
  {
    name: "Shell Scholars School",
    species: "Turtle",
    numberOfStudents: 15,
    location: "Sandy Shores",
    funFact: "Slow and steady wins the spelling bee."
  },
  {
    name: "Scales & Tales Academy",
    species: "Snake",
    numberOfStudents: 25,
    location: "Desert Edge",
    funFact: "They use tail-writing in calligraphy class."
  },
  {
    name: "Clawton Middle School",
    species: "Bear",
    numberOfStudents: 35,
    location: "Pine Ridge Mountains",
    funFact: "Hibernation 101 is a required subject."
  },
  {
    name: "Web Weavers Institute",
    species: "Spider",
    numberOfStudents: 100,
    location: "Tree Canopy Heights",
    funFact: "Their web design class is top-notch!"
  },
  {
    name: "Mudskipper Magnet School",
    species: "Frog",
    numberOfStudents: 40,
    location: "Swampville",
    funFact: "Their music class only uses croaks and ribbits."
  },
  {
    name: "Puddle Pals Preschool",
    species: "Duck",
    numberOfStudents: 50,
    location: "Sunny Lake Park",
    funFact: "They have a splash zone instead of a playground."
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Animal Schools</h1>
      <div>
      {
        animalSchools.map((ele)=>(
          <div key={ele.name}>
            <h2>{ele.name}</h2>
            <p>{ele.species}</p>
            <p>{ele.numberOfStudents}</p>
            <p>{ele.location}</p>
            <p>{ele.funFact}</p>
          </div>
        ))
      }
      </div>
     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#4CAF50" }}>Animal Schools</h2>
      <p style={{ textAlign: "center", color: "#333" }}>
        Animal schools are unique learning institutions where different species 
        of animals develop survival skills, communication techniques, and social behaviors.
        These schools exist in diverse environments such as jungles, oceans, savannahs, 
        and arctic regions, each adapted to the specific needs of its inhabitants.
      </p>
    </div>
    </>
  )
}

export default App
