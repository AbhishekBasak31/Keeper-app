import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
 
  const[notes,setNotes]=useState([]);
  

  function handleClick( CompletedNote){
    
    setNotes((prevData)=>{
      return[
        ...prevData,
        CompletedNote
      ]
    })
    
  }
  function Deleteitems(id){
    setNotes((prevItems)=>{
      return prevItems.filter((items,index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateNote submitNote={handleClick}/>
      {notes.map((note,index)=>{
        return(<Note key={index} id={index} deleteItem={Deleteitems}Title={note.title} Content={note.content} />);
      })}
      
      <Footer />
    </div>
  );
}

export default App;
