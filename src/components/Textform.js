import React,{useState,useEffect} from 'react'

const Textform=(props)=> {

    useEffect(() => {
        document.title = 'TextUtils - Home';
      }, []);

    const [text,setText]=useState('');
    const [email,setEmail]=useState('');

    const handleReverse= (event)=>{
        event.preventDefault();
        let newText=text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reversed Text!","success");
    }

    const handlePalindrome= (event)=>{
        event.preventDefault();
        let newText=text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let reversedText = newText.split('').reverse().join('');
        if(newText === reversedText)
            setText("Palindrome!");
        else
            setText("Not Palindrome!");
        props.showAlert("Palindrome Check!","success");
    }

    const handleUpClick= (event)=>{
        event.preventDefault();
        let newText=text.toUpperCase();
        console.log("Uppercase was clicked"+  newText);
        setText(newText);
        props.showAlert("Converted To Uppercase!","success");
    }

    const handleLoClick= (event)=>{
        event.preventDefault();
        let newText=text.toLowerCase();
        console.log("Lowercase was clicked"+  newText);
        setText(newText);
        props.showAlert("Converted To Lowercase!","success");
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
        setEmail('');
    }

    const handleOnChange= (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const setStyles=(mode)=>{
        let styles={};
        if(mode==='darkred'){
            styles={
                backgroundColor:'#6b0d16',
                color: '#f5ba0b'
            };
        }
        else if(mode==='darkgreen'){
            styles={
                backgroundColor:'#22512d',
                color: '#aedfba'
            };        
        }
        else if(mode==='darkblue'){
            styles={
                backgroundColor:'#140c55',
                color: '#b5acff'
            };        
        }
        else if(mode==='darkyellow'){
            styles={
                backgroundColor:'#7d5f05',
                color: '#fbdc7f'
            };
        }
        else{
            styles={
                backgroundColor:'white',
                color: 'rgb(7 3 44)'
            };
        }
        return styles;
    };
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <form>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{...setStyles(props.mode)}} id="mytext" rows="15"></textarea>
                </div>
                <button className={`btn btn-${props.btn} mx-2`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className={`btn btn-${props.btn} mx-2`} onClick={handleLoClick}>Convert to LowerCase</button>
                <button className={`btn btn-${props.btn} mx-2`} onClick={handleReverse}>Reverse</button>
                <button className={`btn btn-${props.btn} mx-2`} onClick={handlePalindrome}>Palindrome Check</button>
                <button className={`btn btn-${props.btn} mx-2`} onClick={handleEmail}>Email Extractor</button>
                <button className={`btn btn-${props.btn} mx-2`} onClick={handleClear}>Clear</button>
            </form>
        </div>
        <div className="container my-3">
            <h1>Text Summary:</h1>
            {text.split(" ").length>1?text.split(" ").length-1:0} words and {text.length} characters
            <h2>Preview</h2>
            {email.length===0?text.length>0?text:"Default Preview, Enter text to Preview":email}
        </div>
        </>
    )
};
export default Textform;
