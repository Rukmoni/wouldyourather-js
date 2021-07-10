import React,{useEffect} from 'react';
import QuestionCard from '../questionCard';
import './styles.css';

export const TabsContent = ({ titles, activeIndex, onChangeIndex }) => {
    
    useEffect(()=>{
  console.log("Reload",activeIndex)
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
					<div className="tab-menu">
						<li className={activeIndex === index ? 'active' : ''}>
							<a onClick={()=>onChangeIndex(index)}>
								<span>{item.name}</span>
							</a>
						</li>
					</div>
				);
			})}
		</div>
        </>
	);
};
