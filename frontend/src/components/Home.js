import React from 'react'
import background from "../img/book.jpg";

function home() {
    return (
        
        <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+background+')',
          backgroundSize: "cover",
          height: "650px",
          color: "#f5f5f5"
        }}>
        <div style={{width:'600px'}}>
            <p class="text-center" style={{fontSize:'30px',fontStyle:'oblique',paddingTop:'100px',paddingLeft:'100px'}}>  Reading has been proven to keep our minds young, healthy and sharp, with studies showing that reading can even help prevent alzheimer's disease. ... 
            Reading also develops the imagination and allows us to dream and think in ways that we would have never been able to before. 
            Reading can be more important for these reasons and not just knowledge. 
        </p>
           
        </div>
         
      </div>
    )
}

export default home;
