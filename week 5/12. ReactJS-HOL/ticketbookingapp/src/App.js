import React, { Component } from 'react';


// Component for the Login Action Button
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Component for the Logout Action Button
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Guest Page Component: displays flight details but hides booking actions
function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>Available Flights (Browsing Mode)</h3>
        <ul>
          <li>Flight AI-101: New York to London (Seats Available)</li>
          <li>Flight EM-202: Dubai to Paris (Seats Available)</li>
        </ul>
        <p style={{ color: 'red', fontSize: '14px' }}>*Note: You must be logged in to book tickets.</p>
      </div>
    </div>
  );
}

// Logged In User Page Component: enables ticket booking functionality
function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid green', borderRadius: '5px', backgroundColor: '#f9fff9' }}>
        <h3>Flight Booking Console (Active Session)</h3>
        <p>Select your flight below to complete your ticket reservation:</p>
        <button onClick={() => alert('Ticket booked successfully!')} style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
          Book Flight AI-101 Now
        </button>
      </div>
    </div>
  );
}

// Central Greeting Engine utilizing conditional rendering
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


// --- Main Application Component Container ---

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false 
    };
    
    // Explicit binding to maintain contextual scope
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    // Core Lab Objective concept: Implementing an "Element Variable"
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '500px', margin: '0 auto' }}>
        {/* Renders conditional view pages dynamically via property passing */}
        <Greeting isLoggedIn={isLoggedIn} />
        
        {/* Renders the assigned element variable storage block container */}
        <div style={{ marginTop: '15px' }}>
          {button}
        </div>
      </div>
    );
  }
}

export default App;