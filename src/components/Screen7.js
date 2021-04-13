import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Screen7 extends Component {
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
        
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Congratulations! you completed the program" />
            <fieldset>
            <h1>Congratulations - you completed the program</h1>
            <p>You completed the program for studying in Germany. Was this so hard? Could you have imagined a few months ago? Please let us know if this was helpful. We wish you all the best and hopefully stay in touch :)</p>
            </fieldset>
          </Dialog>

    
        
      </MuiThemeProvider>
    );
  }
}

export default Screen7;
