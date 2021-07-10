import React from 'react';
import './styles.css';

export const TabsHeader=({titles,activeIndex,onChangeIndex})=>{
    return(
        <div className="tabs-header">
            {titles.map((item,index)=>{
                return (<div className="tab-menu">
          
          <a onClick={this.doClick.bind(this, index)}>
           <span>{item.name}</span>
         </a> 
       
       </div>)
            })}
        </div>
       
    )

}

