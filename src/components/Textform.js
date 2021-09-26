import React, {useState} from 'react';
import "./home.css";
var yo="Enter your text here"


export default function Textform(self){
    const handleChange = (event)=>{

        console.log("maa nahi change kar raha");
       setText(event.target.value);
          }
    const hello =()=>{
        if (document.body.style.backgroundColor === `black`){
            document.body.style.color =`black`;
            document.body.style.backgroundColor ="pink";
            // document.textarea.style.backgroundColor =`black`;
            // document.textarea.style.color =`white`;
        }
        else{

        document.body.style.backgroundColor =`black`;
        document.body.style.color =`white`;
        // document.textarea.style.backgroundColor =`white`;
        //     document.textarea.style.color =`pink`;
    }
}
    const [text,setText] = useState('enter text here');

return(
<>
<title>Time creators Home</title>
<div id="cont">
<div className="cont">
<div className="mb-3">
  <label  className="form-label">{yo}</label>
  <textarea className="form-control" value={text}  id="exampleFormControlTextarea1" rows="3" onChange={handleChange}></textarea>

    </div>
    <button type="button" className="btn btn-outline-primary" onClick={hello}>Primary</button>
</div>
<h1>This is a small counter</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>

{/* show prievwe */}
<p>{text}</p>
</div>
</>
);
}