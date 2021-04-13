import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
//mport TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Col, Row, Form } from "react-bootstrap";


export class Screen3 extends Component {
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
            <h2>Step 3/6:</h2>
            <h1>How to prepare your application</h1>
            <p> And again you have come your goal one step closer. Congratulations. Now you have selected courses and unis you like. Now we need to prepare for them. If you are afraid of this process because you think you have low grades. Don’t be. With a great LOM you can move mountains. So now go ahead and read the document how to prepare your application. Also attend the next webinar to this topic.
            </p>
            
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
            
            href="http://docs.umanaquiros.com/Chapter%202%20-%20Preparing%20your%20application.pdf" target="_blank" class="btn btn-info" role="button">Preparing your application</a>           
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
            
            href="https://www.eventbrite.de/e/step-36-how-to-prepare-your-application-tickets-149929588435" target="_blank" class="btn btn-info" role="button">Webinar April 21, 7:30 pm ist</a>                               
    </Col>
  </Row>
</Container>

           
Did you read the documents? If yes please answer the questions:<br/><br/> 
            <input type="checkbox" defaultChecked={false}/> Describe which documents you need to prepare for your selected unis?<br />
            <input type="checkbox" defaultChecked={false}/> Did you read the documents and prepare the documents for your courses?<br /><br />

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

export default Screen3;
