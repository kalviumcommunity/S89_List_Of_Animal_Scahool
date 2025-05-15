import React from 'react'
import {useState,useEffect} from "react";
import AnimalSchoolCard from './components/AnimalSchoolCard';
import axios from "axios"
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



const Homepage = () => {
  const[school,setSchool] = useState([]);
  async function getSchoolData(){
    try {
      const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/animal-school`);
      console.log(data.data);
      setSchool(data.data);
    } catch (error) {
      console.log(error)
      alert("Something went wrong");
    }
  }



useEffect(()=>{
  getSchoolData();
},[])
  return (
    <div>
      <h1>List Of Animals School</h1>
        {
            school.map((animalSchool)=>(
                <AnimalSchoolCard key={animalSchool._id}  animalSchool={animalSchool} getSchoolData={getSchoolData} />
            ))    
        }
    </div>
  )
}

export default Homepage