import React from 'react'

const AnimalSchoolCard = ({animalSchool}) => {
  console.log(animalSchool)
  return (
    <div
    style={{
      padding:"0.5rem",
      borderRadius:"0.5rem",
      border:"1px solid",
      marginBottom:"1rem"
    }}
    >
        <h2>{animalSchool.name}</h2>
        <p><span
        style={{
          fontWeight:"800"
        }}
        >Location:{" "}</span>{animalSchool.location}</p>
       
        <div
        style={{
          padding:"0.5rem",
          borderRadius:"0.5rem",
          border:"1px solid",
          marginBottom:"1rem",
          width:"max-content",
          margin:"auto"
        }}
        >
           <h3>List Of Animals in School</h3>
        {
          animalSchool && animalSchool.animals ? animalSchool.animals.map((ele)=>(
            <p>{ele}</p>
          )):""
        }
        </div>
    </div>
  )
}

export default AnimalSchoolCard