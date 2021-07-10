import React from 'react';
import './styles.css';

export const TabsContent=({titles,activeIndex,onChangeIndex})=>{
    return(
        <div className="tabs-content">{
            <div className="container">
             
             <QuestionCard/>
             <QuestionCard/>
            </div>
          }</div>
    
    
       
    )

}

