import React from 'react';
import './App.css';

function App() {
  // Heading text element
  const element = "Office Space";

  // Image source placeholder URL (Using a generic office building image)
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80";
  
  // Image element attribute configuration
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  // List of Office Objects (to satisfy both the single-object structure and looping through items)
  const offices = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus Premium", Rent: 75000, Address: "Bangalore" },
    { Name: "Smartworks", Rent: 55000, Address: "Mumbai" }
  ];

  return (
    <div className="container">
      {/* 1. Page Heading */}
      <h1>{element} , at Affordable Range </h1>
      
      {/* 2. Image Attribute Element */}
      {jsxatt}

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #ccc' }} />

      {/* 3. Loop through the office space items to display data dynamically */}
      {offices.map((ItemName, index) => {
        // Hint Logic: Evaluate text color dynamically per item based on Rent
        let colors = [];
        if (ItemName.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }

        return (
          <div key={index} style={{ marginBottom: '40px' }}>
            <h1>Name: {ItemName.Name}</h1>
            
            {/* Rent display with conditional class styling applied from the colors array */}
            <h3 className={colors[0]}>
              Rent: Rs. {ItemName.Rent}
            </h3>
            
            <h3>Address: {ItemName.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;