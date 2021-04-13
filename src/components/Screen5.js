import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Col, Row, Form } from "react-bootstrap";

export class Screen5 extends Component {
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
            <AppBar title="Applying for a german student visa" />
            <fieldset>
            <h2>Step 5/6:</h2>
            <h1>Applying for a german student visa</h1>
            <p>
            Wow. If you made it so far I believe it is time for congratulations. You received a letter of admission. That's amazing. We are basically on the finishing line. Just a few more steps. Now it is time to get a german student visa. Make sure to read the document and attend the webinar to this topic!</p>
            
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
            href="http://docs.umanaquiros.com/Chapter%204%20-%20Obtain%20a%20german%20student%20visa.pdf" target="_blank" class="btn btn-info" role="button">Obtain a german student visa</a>
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
            href="https://www.eventbrite.de/e/step-56-applying-for-a-german-student-visa-tickets-149932009677" target="_blank" class="btn btn-info" role="button">Webinar April 28, 7:30 pm ist</a>                               
    </Col>
  </Row>
</Container>
         
  Did you read the documents? If yes please answer the questions:<br/><br/> 
  <input type="checkbox" defaultChecked={false}/> Tell us which documents you need for your visa application?<br />
  <input type="checkbox" defaultChecked={false}/> Tell us the cost for a visa?<br />
  <input type="checkbox" defaultChecked={false}/> Did you read the documents and applied for your visa?<br /><br />
           
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

export default Screen5;
