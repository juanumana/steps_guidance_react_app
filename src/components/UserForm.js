import React, { Component } from 'react';
import Login from './Login';
import Confirm from './Confirm';
import Success from './Success';
import Screen0 from './Screen0';
import Screen0MainMenu from './Screen0MainMenu';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Screen6 from './Screen6';
import Screen7 from './Screen7';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <Login
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          //<Screen0
          <Screen0
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Screen1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        case 4:
        return (
          <Screen2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        case 5:
        return (
          <Screen3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        case 6:
        return (
          <Screen4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        case 7:
        return (
          <Screen5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        case 8:
        return (
          <Screen6
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 9:
        return <Screen7 />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
