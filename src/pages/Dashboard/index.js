import React from "react";
import { TabsHeader,TabsContent } from "../../components/TabView";
import "./styles.css";
const TabTitles=[{id:1,name:"Answered Questions"},{id:2,name:"UnAnswered Questions"}]
export class DashBoard extends React.Component  {
  constructor(){
    super();
    this.state={
      activeTab:0,
      
    };
    this.changeTabOnClick = this.changeTabOnClick.bind(this);
  }
  changeTabOnClick(id){
    this.setState({activeTab:id})

  }
render(){
  return (
    <div className="Tabcontainer">
      <TabsHeader titles={TabTitles} activeIndex={this.state.activeTab} onChangeIndex={this.changeTabOnClick}/>
      <TabsContent titles={TabTitles} activeIndex={this.state.activeTab}/>
    </div>
  );
}
  
};

export default DashBoard;
