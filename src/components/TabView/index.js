import React,{useEffect} from 'react';
import QuestionCard from '../questionCard';
import './styles.css';

export const TabsContent = ({ titles, activeIndex, questions }) => {
    
    useEffect(()=>{
  console.log("Reload",questions)
    },[activeIndex])
	return (
		<div className="tabs-content">
			{activeIndex==0?
				<div className="container">
                <QuestionCard/>
           <QuestionCard/>
					
				</div>:<div className="container">
                <QuestionCard/>
           <QuestionCard/>
           <QuestionCard/>	
           <QuestionCard/>
           <QuestionCard/>	
				</div>
			}
		</div>
	);
};

export const TabsHeader = ({ titles, activeIndex, onChangeIndex }) => {
	return (
        <>
		<div className="tabs-header">
       
			{titles.map((item, index) => {
				return (
					
						<li className={activeIndex === index ? 'active' : ''}>
							<a onClick={()=>onChangeIndex(index)}>
								{item.name}
							</a>
						</li>
					
				);
			})}
           
		</div>
        </>
	);
};
