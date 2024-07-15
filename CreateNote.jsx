import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateNote(props){

    const[CompleteNote,setNote]=useState({
        title:"",
        content:""
      });
      const [isClicked,setCliked]=useState(false)
    
      function handleChange(event) {
        const Name=event.target.name;
        const Value=event.target.value;
        setNote((prevValue)=>{
         if(Name==="title"){
          return{
            title:Value,
            content:prevValue.content
          }
         }
         else if(Name==="content"){
          return{
            title:prevValue.title,
            content:Value
          }
         }
        })
        console.log(CompleteNote);  
    
    }
    function boxClick(){
        setCliked(true);
    }

    return(
       <div onClick={boxClick}>      
        <form className="container">       
         {isClicked?<input  onChange={handleChange} name="title" type="text" placeholder="Title" value={CompleteNote.title}/>:null} 
        <textarea name="content" id="" onChange={handleChange} placeholder="Take notes" cols="55" rows={isClicked?"5":"2"} value={CompleteNote.content}></textarea>
       <Zoom in={isClicked}>      
          <Fab size="small" onClick={(event)=>{
            event.preventDefault()
            props.submitNote(CompleteNote)
            setNote({title:"",content:""})
            }}><span><AddIcon/></span></Fab>
            
        </Zoom>

            </form>
 
            </div>
  
   
    )
}
export default CreateNote;