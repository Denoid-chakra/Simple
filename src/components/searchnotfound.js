import React from 'react';
import './notfound.css';
import {Link, link} from 'react-router-dom';
var x = document.URL;
export default function Errar(self){
return(

<>
<div id="notfound">
<p>error we are unable to found  <b color="red">{x}</b></p>
</div>
</>
);
}