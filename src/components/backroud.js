import React, {useState} from 'react';

import"./backgroin.css"


export default function Back(self){
    return(
        <>
<header>


<div className="overlay"></div>


<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
  <source src="https://media.istockphoto.com/videos/oyster-farm-near-the-coast-of-japan-video-id1255140650" type="video/mp4"></source>
  <source src={"https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} type="image/jpeg"></source>

</video> 

{/* <!-- The header content --> */}
<div className="container h-100">
  <div className="d-flex h-100 text-center align-items-center">
    <div className="w-100 text-white">
      <h1 className="display-3">Video Header</h1>
      <p className="lead mb-0">Nice too Meet you</p>
    </div>
    
 

  </div>
  </div>

</header>
</>
    );
}
