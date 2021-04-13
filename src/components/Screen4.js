import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Col, Row, Form } from "react-bootstrap";

export class Screen4 extends Component {
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
            <AppBar title="Applying at your chosen universities" />
            <fieldset>
            <h2>Step 4/6:</h2>
            <h1>Applying at your chosen universities</h1>
            <p> Step by step we are moving towards our goal. Isn’t it amazing? Maybe you can text Manuel and let him know what you think so far? Has this guide been helpful to you?
In this chapter we are going to apply at the universities you have selected. Make sure to read the document first and also attend our webinar!</p>

            <p
            style={{
              display: "flex",
              backgroundColor: '#F0F0F0',
              justifyContent: "center",
              alignItems: "center",
            }}
            >
            <strong>Tasks in this chapter:</strong><br/></p>
<Container>
  <Row>
    <Col xs={{ order: 'last' }}> 
            2) Read:<br/><br/>
            <a 
              style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",}}
            href="http://docs.umanaquiros.com/Chapter%203%20-%20applying%20at%20university%20and%20uni-assist.pdf" target="_blank" class="btn btn-info" role="button">Applying at university and uni-assist</a>
            <br/>            
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
            href="https://www.eventbrite.de/e/step-46-applying-at-your-chosen-universities-tickets-149931303565" target="_blank" class="btn btn-info" role="button">Webinar April 21, 7:30 pm ist</a>                               
    </Col>
  </Row>
</Container>
           
Did you read the documents? If yes please answer the questions:<br/><br/> 
            <input type="checkbox" defaultChecked={false}/> Describe the cost for the applications?<br />
            <input type="checkbox" defaultChecked={false}/> Describe the difference between uni-assist and a direct application?<br />
            <input type="checkbox" defaultChecked={false}/> Did you read the documents and applied at Uni-assist?<br />

            <Container>
  <Row>
  <Col xs={{ order: 'first' }}>
    <br/>
  Is something unclear? <br/><strong>Text Manuel: +4915225964039</strong><br/>
    </Col>
    <Col xs={{ order: 'last' }}> 
          <br/>
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
            <br/>
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

export default Screen4;
