import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Initializing state for counter and the currency form fields
    this.state = {
      counter: 0,
      amount: '',
      currency: ''
    };

    // Explicit binding of methods to use the 'this' keyword correctly
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Task 1: Increment method that chains multiple invocations
  handleIncrement() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
    this.sayHello();
  }

  // Method to display a static alert box greeting
  sayHello() {
    alert("Hello! Member1");
  }

  // Task 2: Decrement method to decrease the counter value
  handleDecrement() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  }

  // Task 3: A method accepting an argument dynamically passed on click
  sayWelcome(message) {
    alert(message);
  }

  // Task 4: Synthesized event demonstration
  handleSyntheticEvent(e) {
    // Accessing properties on React's SyntheticEvent wrapper if needed
    alert("I was clicked");
  }

  // Utility handler to track user keystrokes in form fields dynamically
  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  // Task 5: Form submission processing Indian Rupees to Euro conversion
  handleSubmit(e) {
    e.preventDefault(); // Prevents traditional browser reloading on submit
    const amt = parseFloat(this.state.amount);

    if (isNaN(amt)) {
      alert("Please enter a valid numeric amount.");
      return;
    }

    // According to the image output description: 80 Euro converts to 6400 Rupees (conversion factor of 80)
    const convertedAmount = amt * 80; 
    alert(`Converting to Euro Amount is ${convertedAmount}`);
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        {/* Dynamic Display of Counter State */}
        <h3>{this.state.counter}</h3>

        {/* Action Controls for Event Handling */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '120px', gap: '5px' }}>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          
          {/* Passing arguments inline using an arrow function wrapper */}
          <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
          
          {/* Passing the event object to a Synthetic Event handler */}
          <button onClick={(e) => this.handleSyntheticEvent(e)}>Click on me</button>
        </div>

        <br />
        <hr />

        {/* Currency Converter Form Section */}
        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        
        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label htmlFor="amount">Amount:</label>
            <input 
              type="text" 
              id="amount"
              name="amount" 
              value={this.state.amount} 
              onChange={this.handleInputChange} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label htmlFor="currency">Currency:</label>
            <textarea 
              id="currency"
              name="currency" 
              rows="2"
              value={this.state.currency} 
              onChange={this.handleInputChange} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;