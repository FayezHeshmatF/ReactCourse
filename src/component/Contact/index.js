import React, { Fragment } from 'react';
import {ContactSection,ContactTitle,Span,Form,FormInput,InputText,InputEmail,InputEx,TextArea,InputSubmit} from './style.js'
import Footer from './../Footer'
const Contact =()=> {
 
  return (
    <Fragment>
    <ContactSection>
    <div class="container">
        <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
        <Form>
            <FormInput>
                <InputText type="text" placeholder="Your Name"/>
                <InputEmail type="email" placeholder="Your Email"/>
            </FormInput>
            <InputEx type="text" class="sub" placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message"/>
        </Form>
    </div>
</ContactSection>
<Footer />
</Fragment>
  );
 
}

export default Contact;
  