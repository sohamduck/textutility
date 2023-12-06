import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('');
    const [email,setEmail]=useState('');

    const handleUpClick= (event)=>{
        event.preventDefault();
        let newText=text.toUpperCase();
        console.log("Uppercase was clicked"+  newText);
        setText(newText);
    }

    const handleLoClick= (event)=>{
        event.preventDefault();
        let newText=text.toLowerCase();
        console.log("Lowercase was clicked"+  newText);
        setText(newText);
    }

    const handleEmail= (event)=>{
        event.preventDefault();
        const emailtype =  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g; 
        let newemail=text.match(emailtype);
        console.log(newemail);
        setEmail(newemail?newemail[0]:'');
    }

    const handleClear= (event)=>{
        event.preventDefault();
        let newText='';
        setText(newText);
    }

    const handleOnChange= (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <form>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mytext" rows="15"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleEmail}>Email Extractor</button>
                <button className="btn btn-primary" onClick={handleClear}>Clear</button>
            </form>
        </div>
        <div className="container my-3">
            <h1>Text Summary:</h1>
            {text.split(" ").length} words and {text.length} characters
            <h2>Preview</h2>
            The email is {email}
        </div>
        </>
    )
}
