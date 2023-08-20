import React from 'react';
import './Stack.css'; // Import your CSS file for styling

const Stack: React.FC = () => {
  return (
    <div className="stack-container">
      <div className="background-image"></div>
      <div className="component-stack">
        <div className="component" style={{ margin: '20px' }}>
          <h2>Contact Us</h2>
          <form>
            {/* ... Form inputs ... */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="component" style={{ margin: '20px' }}>
          <h2>About Us</h2>
          <p>Lorem text</p>
        </div>
        <div className="component" style={{ margin: '20px' }}>
          <h2>Services</h2>
          <ul>
            <li>element 1</li>
            <li>element 2</li>
            <li>element 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stack;
