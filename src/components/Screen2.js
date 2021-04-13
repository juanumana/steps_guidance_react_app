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
            <AppBar title="Selecting your courses and universities" />
            <fieldset>
            <h2>Step 2/6:</h2>
            <h1>Selecting your courses and universities</h1>
            <p>
            Alright you have made it one step further. You now have the basic infos completed and have an overview how studying in Germany will be!</p>
            
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
                <Col xs={{ order: 'second' }}> 
                  2) Read:<br/><br/>
                  
                  <a 
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                    }}
                  
                   href="http://docs.umanaquiros.com/Chapter%201%20-%20How%20to%20start%20and%20which%20course%20and%20uni%20to%20choose.pdf" target="_blank"target="_blank" class="btn btn-info" role="button">How to start and which uni and course to choose</a>
                  
                </Col>
              <Col xs={{ order: 'last' }}> 
                  3) Select Courses and Universities:<br/><br/>
                  
                    <a 
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                    }}
                      href="http://university-finder-de.surge.sh/"target="_blank" class="btn btn-info" role="button">
                      Selection<br/>Tool</a>
                  
              </Col>

    <Col xs={{ order: 'first' }}>
            1) Attend:<br/><br/><br/>  
            <a 
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}     
            href="https://www.eventbrite.de/e/step-26-selecting-your-courses-and-universities-tickets-149929229361"target="_blank" class="btn btn-info" role="button">Webinar April 10, 7:30 pm ist<br/></a>                               
    </Col>
  </Row>
</Container>
<br /><br />

            
Did you read the documents? If yes please answer the questions:<br/><br/> 
            <input type="checkbox" defaultChecked={false}/> Tell me how the European credit system works?<br />
            <input type="checkbox" defaultChecked={false}/> Tell me which unis you have selected? <br />
            <input type="checkbox" defaultChecked={false}/> Did you read the documents and selected ten courses?<br /><br /> 

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
