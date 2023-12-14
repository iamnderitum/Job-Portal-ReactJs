import React from 'react';
import { Link } from 'react-router-dom';

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30vh',
  textAlign: 'center'
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '500px',
  margin: '20px'
};

const buttonStyle = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#525252',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px'
};


function Home() {
  return (
    <div data-testid='home-component' style={homeStyle}>
      <div style={buttonContainerStyle}>
         {/* Hint: Implement this */}
          <Link to={"/candidate/registration"} data-testid="register-button" style={buttonStyle}>
            Register Candidate
          </Link>
          <Link to={"/candidate/list"} data-testid="register-button" style={buttonStyle}>
            List Candidate
          </Link>
      </div>
    </div>
  );
}

export default Home;