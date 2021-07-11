import React from 'react';
import './styles.css';

const NewQuestion=({author,question})=>{
    console.log("ResultView:",author)
    return(
        <div className="resultCard">
 <div className="titleBar">
        {author.name} asks
        </div>
        <div className="pollContainer">
        <div className="avatar">
         <img src={author.avatarURL} alt="Avatar" className="img" /> 
        </div>
        <div className="vl"></div>
        <div className="contentBlock">
          <h4>
            <b>Would you rather</b>
          </h4>
          <div className="resultContainer">
         
          <div className="myProgress">
              <div className="myBar">
                  25%
              </div>
          </div>
          </div>

          <div className="resultContainer">
          <div className="myProgress">
              <div className="myBar">
                  25%
              </div>
          </div>
          </div>
     
          <button className="btn" onClick={()=>{}}>Submit</button>
        </div>
        </div> 
        </div>
    )

}

export default NewQuestion;