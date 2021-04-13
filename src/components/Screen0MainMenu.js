import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Col, Row, Form } from "react-bootstrap";

export class Screen0MainMenu extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render(

  ) {
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
            <Container>
              <Row>
                <Col>
                <h4>My Profile</h4>
                
                </Col>
                <Col>
                <a 
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                    }}
                    href="/"target="_blank" role="button">Personal Info<br/></a>
                </Col>
              </Row>        
              <Row>
                
              <Col>
              

<a 
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                    }}
                    href="/"target="_blank" class="btn btn-info" role="button">Guidance Step by Step<br/></a>


                <br/>
                <a 
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                    }}
                    href="http://university-finder-de.surge.sh/"target="_blank" class="btn btn-info" role="button">Courses / Universities Selection Tool  <br/></a>
                <br/>
                <a 
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                    }}
                    href="/"target="_blank" class="btn btn-info" role="button">Next Webinars<br/></a>
                <br/>
                <a 
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",                      
                    }}
                    href="http://university-finder-de.surge.sh/"target="_blank" class="btn btn-info" role="button">My ToDo List<br/></a>
                <br/>
                </Col>
                <br/><br/>
              </Row>

              <Row>
                <Col>
              <a 
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                    }}
                    href="/"target="_blank" role="button">Logout<br/></a>
                </Col>
              </Row> 
            </Container>
              
            </fieldset>  
            <br/>

          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Screen0MainMenu;
