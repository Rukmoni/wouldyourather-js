import React,{useEffect,useState} from 'react';
import QuestionCard from '../questionCard';
import './styles.css';

export const TabsContent = ({ titles, activeIndex, questions }) => {
    const [qList,setQList]=useState();
    useEffect(()=>{
 		
		setQList(questions);
	},[activeIndex])
	const renderQuestions=()=>{
		
	let list=qList.map((question)=>{return <QuestionCard question={question}/>})
		
		return <div className="container">{list}</div>
	}
	return (
		<div className="tabs-content">
		{qList?
		renderQuestions():<div> No Questions Available to display</div>

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
