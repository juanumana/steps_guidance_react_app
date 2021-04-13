import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class Screen0 extends Component {
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
            <h1>Welcome! we are so happy that you are interested in studying in Germany.</h1>
            <p>It used to be a hard and painful process for so many of you, needing to use consultancies and spend a lot of money. But we guide you for free. Chapter by chapter we guide you through the process. In every chapter we have a webinar for you and documents prepared. If anything is unclear just contact Manuel. 
              <br /><br />
              Let’s begin?
            </p>
              
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

export default Screen0;
