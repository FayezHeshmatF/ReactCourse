import Axios from "axios";
import React, { Component } from "react";
import {SocialMediaSection,Social,Icon,SocialP,Span,SpanInfo} from './style.js'

class  ScocailMedia extends  Component {
  state={
    social:[]
  }
  componentDidMount(){
    Axios.get('data.json').then(res=>{
      this.setState({
        social:res.data.social
      })
    })
  }
  render(){
    const {social}=this.state;
    const SocialIcon =social.map((socialItem) => {
      return (
        <Social item={socialItem.id} key={socialItem.id}>
        <Icon className={socialItem.icon}></Icon>
        <SocialP>
          <Span>{socialItem.title}</Span>
          <SpanInfo>{socialItem.body}</SpanInfo>
        </SocialP>
      </Social>
      )
    })
  return (
    <SocialMediaSection>
      {SocialIcon}
    </SocialMediaSection>
  );
};
}

export default ScocailMedia;
