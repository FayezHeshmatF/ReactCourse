import Axios from "axios";
import React, { Component } from "react";
import {
  WorkSection,
  WorkTitle,
  Span,
  WorkPart,
  Icon,
  Line,
  PartTitle,
  PartDasc,
} from "./style.js";

class Work extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    Axios.get("data.json").then( res => {
      this.setState({
        works: res.data.works,
      });
    });
  }
  render() {
    const { works } = this.state;
    const worksList = works.map((workItem) => {
      return (
        <WorkPart first= {workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDasc>{workItem.body}</PartDasc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span>Work
          </WorkTitle>
          {worksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
