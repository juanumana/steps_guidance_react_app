import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Col, Row, Form } from "react-bootstrap";

export class Screen6 extends Component {
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
            <AppBar title="Getting started in Germany" />
            <fieldset>
            <h2>Step 6/6:</h2>
            <h1>Getting started in Germany</h1>
            <p> Wow this is seriously amazing. You also received the visa. Now it is time to prepare you for your stay in Germany. We can imagine you are a little nervous, but don’t be. Be excited. Everything will go really well. Just check out our next webinar and read the last document, to prepare you perfectly. </p>

            <p
            style={{
              display: "flex",
              backgroundColor: '#F0F0F0',
              justifyContent: "center",
              alignItems: "center",
            }}
            ><strong>Tasks in this chapter:</strong><br/></p>
<Container>
  <Row>
    <Col xs={{ order: 'last' }}> 
            2) Read:<br/><br/>
            <a 
              style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",}}
            href="http://docs.umanaquiros.com/Chapter%205%20-%20getting%20started%20in%20Germany.pdf" target="_blank" class="btn btn-info" role="button">Getting started in Germany</a>
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
            href="https://www.eventbrite.de/e/step-66-getting-started-in-germany-tickets-149932689711" target="_blank" class="btn btn-info" role="button">Webinar May 2nd, 7:30 pm ist</a>                               
    </Col>
  </Row>
</Container>

<br /><br />           
Did you read the documents? If yes please answer the questions:<br/><br/> 
            <input type="checkbox" defaultChecked={false}/> Tell us how to find an apartment in Germany?<br />
            <input type="checkbox" defaultChecked={false}/> What the broadcasting fees in Germany are and how to deal with them?<br />
            <input type="checkbox" defaultChecked={false}/> Did you read the documents and organized everything for your stay in Germany?<br /><br />

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

            <br />
            </fieldset>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back
            </Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Screen6;