import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Col, Row, Form } from "react-bootstrap";

export class Screen2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Welcome to our step by step guide for studying in Germany" />

            <fieldset>
 
            <h2>Step 1/6:</h2>
            <h1>Basics about studying in Germany</h1>
            <p>      
            Great! You have made the decision to learn a little more about studying in Germany! So fulfill your task for this chapter. Then you can continue to the next level!
            </p>
            
            <p 
            
            style={{
              display: "flex",
              backgroundColor: '#F0F0F0',
              justifyContent: "center",
              alignItems: "center",

            }}
            
            >
            <strong>Tasks in this chapter:</strong>
            </p>
<Container>
  <Row>
    <Col xs={{ order: 'last' }}> 
            2) Read:<br/><br/>

            <a 
              style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
            
            href="http://docs.umanaquiros.com/Most%20common%20asked%20questions.pdf" target="_blank" class="btn btn-info" role="button">FAQ</a>
            
            <br/>
            <a 
              style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
            
            href="http://docs.umanaquiros.com/Financing%20your%20studies%20in%20Germany.pdf" target="_blank" class="btn btn-info" role="button">Financing your stay</a>

            <br/>  
            <a 
              style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
            
            href="http://docs.umanaquiros.com/Masters%20in%20Germany%20in%20general.pdf" target="_blank" class="btn btn-info" role="button">Master in Germany</a>



            
    </Col>

    <Col xs={{ order: 'first' }}>
            1) Attend:<br/>  

            <br/>
            <a 
            
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
            
            href="https://www.eventbrite.de/e/studying-at-technische-hochschule-nurnberg-tickets-149464533443" target="_blank" class="btn btn-info" role="button">Webinar April 8 7:30 pm ist</a>                               


    </Col>

  </Row>
</Container>


            
            <br /><br />

            
            Did you read the documents? If yes please answer the questions:<br/><br/>  
            
          <input type="checkbox" defaultChecked={false}/> Say if you need work experience to study in Germany?<br/>
          <input type="checkbox" defaultChecked={false}/> How many days are you allowed to work during your studies?<br/>
          <input type="checkbox" defaultChecked={false}/> Do you need to speak german to study in Germany?<br/><br/>
          
         
          


  <Container>
  <Row>
  <Col xs={{ order: 'first' }}>
  Is something unclear? <br/><strong>Text Manuel: +4915225964039</strong><br/>
    </Col>
    <Col xs={{ order: 'last' }}> 
          <a 
            
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
            
            href="https://forms.gle/oJPYnHAtPK4fSmXV7" target="_blank" class="btn btn-info" role="button">We appreciate your Feedback!</a>                               
      </Col>
  </Row>
  </Container>
              
              
            
            </fieldset>


            
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Screen2;
