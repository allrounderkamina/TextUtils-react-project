import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("convarted to upperCase","success");
    }
    const clearText=()=>{
       let newText='';
       setText(newText);
       props.showAlert("Clear text","success");
    }
    const handleUpClick2=()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText=text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("convarted to lowerCase","success");
    }
   
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleUpClick2}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1 >Your Text Summary</h1>
<p>{text.split(" ").length-1}Word and {text.length}Characters</p>
<p>{0.008*text.split(" ").length}Minutes Read</p>
<h2>Preview</h2>
<textarea name="preview" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}} value={text.length>0?text:"Enter something to preview  it hare"} id="preview" cols="100" rows="10" ></textarea>
{/* <p>{text}</p> */}
    </div>

    </>
  )
}
