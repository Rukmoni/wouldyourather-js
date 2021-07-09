import React from "react";
import QuestionCard from '../questionCard';
//import Question from "./Question";
//import NewQuestion from "./NewQuestion";
import "./styles.css";
let data = [
  {
    name: "Answered Questions",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?"
  },
  {
    name: "UnAnswered Questions",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!"
  }
];

export class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
      data: data
    };

    this.changeTabOnClick = this.changeTabOnClick.bind(this);
  }

  changeTabOnClick(index) {
    this.setState({
      activeTab: index
    });
  }

  render() {
    return (
      <div className="tabs-body">
        <TabHeader
          data={this.state.data}
          click={this.changeTabOnClick}
          activeId={this.state.activeTab}
        />
        <TabContent data={this.state.data} activeId={this.state.activeTab} />
      </div>
    );
  }
}

class TabHeader extends React.Component {
  doClick(index, event) {
    this.props.click(index);
  }

  render() {
    let activeClass = this.props.activeId;

    let tabs = this.props.data.map((item, index) => {
      return (
        <div className="tab-menu">
    
           <a onClick={this.doClick.bind(this, index)}>
            <span>{item.name}</span>
          </a> 
        
        </div>
      );
    });

    return <div className="tabs-header">{tabs}</div>;
  }
}

class TabContent extends React.Component {
  render() {
    let activeClass = this.props.activeId;
    let content = this.props.data.map((item, index) => {
      return (
        <div
          className={"tabs-textItem " + (activeClass === index ? "show" : "")}
        >
          <div className="container">
           
           <QuestionCard/>
           <QuestionCard/>
          </div>
        </div>
      );
    });

    return <div className="tabs-content">{content}</div>;
  }
}
