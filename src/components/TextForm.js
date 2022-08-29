import React, {useState} from 'react'

export default function (props) {
  
    const handleUpClick = () =>{
        console.log("UpperCase was Clicked "+ text);
        let newText = text.toUpperCase();
setText(newText);
props.showAlert("Converted to upper case" , "success");
    }
    const handleLoClick = () =>{
        console.log("UpperCase was Clicked "+ text);
        let newText = text.toLowerCase();
setText(newText);

props.showAlert("Converted to Lower case" , "success");
    }

    const handleClearClick = () =>{
        console.log("UpperCase was Clicked "+ text);
        let newText = '';
setText(newText);

props.showAlert("Text Cleared" , "success");
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text , setText] = useState('');
    //text = " New text "; // wrong to update
   // setText ("New Text"); // correct way to update
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1> {props.text} </h1> 
<div className="mb-3">
  <label htmlFor="mybox" className="form-label">Example textarea</label>
  <textarea className=" form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode ==='dark'? 'white': '#042743'}}  id="mybox" rows="8"></textarea>
</div>  
<button className="btn btn-primary mx-1 " onClick={handleUpClick}> Uppercase</button>

<button className="btn btn-primary mx-1" onClick={handleLoClick}> Lowercase</button>


<button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear </button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1> Your text Summary </h1>    
    <p> {text.split(' ').filter(a => a.trim()).length} words and {text.length} characters</p>
    <p> {0.008 * text.split(" ").length } Minutes read </p>
    <h2> Preview</h2>
    <p>  {text.length>0?text:"Enter something in textbox to preview: "}</p>
    </div>
    </>
  )
}
