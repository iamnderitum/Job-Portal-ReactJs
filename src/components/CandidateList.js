import React, { useState, useEffect } from 'react';
import profileCard from "./ProfileCard";
import ProfileCard from './ProfileCard';
// Base styles for the component
const searchContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const profileCardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  maxWidth: '600px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '10px',
};


const searchBoxContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const skillsStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '5px',
  padding: '5px 10px',
  margin: '5px',
}

const searchBoxStyle = {
  flex: '1',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const searchButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none',
};

const listAllButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none'
};

function CandidateList() {
  const [searchText, setSearchText] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState('');
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const storedCandidates = JSON.parse( localStorage.getItem('candidates')) || [];
    if (storedCandidates) {
      // Hint: Implement this

      const candidates = storedCandidates;
      setCandidates(candidates.length);
      //setCandidateCount(candidates.length);
    }
  }, []);

  /*
  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates));
  }, [candidates]);

  */

  const handleSearch = () => {
   // Hint: Implement this
   const filtered = candidates.filter(candidate =>
    candidate.skills.includes(searchText.trim())

    );
    setFilteredCandidates(filtered)
  };

  const handleListAll = () => {
    // Hint: Implement this

    setSearchText("");
    setFilteredCandidates(candidates);
  };

  return (
    <div style={{ ...searchContainerStyle, alignItems: 'center' }}>
      <div style={searchBoxContainerStyle}>
        <input
          type="text"
          placeholder="search skills"
          value=""
          style={searchBoxStyle}
          //Hint: Implement this
          onChange={e => searchText(e.target.value)}
        />
        <button style={searchButtonStyle}>
          Search Button
        </button>
        <button data-testid='candidate-card' style={listAllButtonStyle}>
          List All
        </button>
      </div>

      {filteredCandidates.length === 0 ? (

        <p> No Candidates found. </p>
        // Implement this
        //console.log()
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          {filteredCandidates.map(candidates => (

             <div key={candidates.id} style={{ ...profileCardStyle, textAlign: 'left', marginRight: '10px' }}>
             <h2 style={{ marginBottom: '10px' }}>Role: {candidates.role}</h2>
             <p>Name: {candidates.name}</p>
             <p>Email: {candidates.email}</p>
             <div>
               <p style={{ fontWeight: 'bold' }}>Skills</p>
               <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {candidates.skills.map((skill, index) => (


                   <div
                     key={index}
                     style={skillsStyle}
                   >
                     {/* Hint: Implement this */}

                     {skill}

                   </div>
                ))}
               </div>
             </div>
           </div>
          ))}

        </div>
      )}
    </div>
  )
}

export default CandidateList;
