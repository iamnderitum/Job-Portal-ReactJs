import React, { useState, useEffect } from 'react';

// Base styles for the component
const alertMessage = {
  marginTop: '5px'
}

const highlight = {
  border: '2px solid red',
  backgroundColor: 'red'
}


const centerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const addSkillButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  color: 'white',
  borderRadius: '5px',
  marginLeft: '10px',
  cursor: 'pointer',
};

const formBoxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  backgroundColor: '#f5f5f5',
};

const formGroupStyle = {
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
};

const sharpEdgeButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  padding: '10px 20px',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const skillTagStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '0',
  padding: '5px 10px',
  margin: '0 5px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

function CandidateRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skill: '',
    skills: [],
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const highlightInput = true;
  const [emailExistsError, setEmailExistsError] = useState(false)

  const handleAddSkill = () => {
    // Hint: Implement this
    const {skill, skills} = formData;
    if (skill.trim() !== '' && skills.length < 5) {
      setFormData({
        ...formData,
        skills: [...skills, skill.trim()],
        skill: '', // Clear the input field after adding the skill
      });
    }
    /*
    if (formData.skill.trim() !== "" && formData.skills.length < 5){
      setFormData({
        ...formData,
        skills:[ ...FormData.skills, formData.skill.trim()],
        skill: "",
      });
    }
    */
  };

  const handleFormSubmit = (e) => {
    // Hint: Implement this
    e.preventDefault();
    const isValid = validateForm();
    if (isValid){
      const CandidateWithEmailExists = candidates.some(
        (candidate) => candidate.email === formData.email
      );
      if(CandidateWithEmailExists){
        setEmailExistsError(true);
      }else{
        // Register Candidate
        setCandidates([ ...candidates, formData]);
        setRegistrationStatus("Candidate registered successfully! ");
        setFormData({
          name: "",
          email: "",
          role: "",
          skill: "",
          skills: [],
        });
        setEmailExistsError(false);
      }
    }
  };
  const validateForm = () => {
    const { name, email, role, skills } = formData;

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z0-9\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const roleRegex = /^[a-zA-Z0-9\s]+$/;
    const skillsRegex = /^[a-zA-Z0-9,\s]+$/;

    const isNameValid = nameRegex.test(name);
    const isEmailValid = emailRegex.test(email);
    const isRoleValid = roleRegex.test(role);
    const isSkillsValid = skills.length > 0 && skills.length <= 5 && skillsRegex.test(skills.join(','));

    return isNameValid && isEmailValid && isRoleValid && isSkillsValid;
  };


  const handleReset = () => {
    // Hint: Implement this

    setFormData({
      name: "",
      email: "",
      role: "",
      skill: "",
      skills: [],
    });
    setEmailExistsError(false);
  };

  const isAddSkillDisabled = formData.skill.trim() === '' || formData.skills.length >= 5;

  // Validating the form to enable/disable the Submit button
  const isSubmitDisabled = !validateForm();

  useEffect(() => {
      const storedCandidates = localStorage.getItem('candidates');
      if (storedCandidates) {
        // Hint: Implement this
        setCandidates(JSON.parse(storedCandidates));
      }
    }, []);

  useEffect(() => {
      // Save candidates to localStorage whenever candidates state changes
      localStorage.setItem('candidates', JSON.stringify(candidates));
    }, [candidates]);


  return (
    <div style={centerContainerStyle}>
      <div style={formBoxStyle}>
        <div data-testid='registration-component' style={formBoxStyle}>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                required
                style={inputStyle}
                data-testid='form-input-name'
                // onChange={() => {}} - Hint: Implement this
                onChange={(e) => setFormData({ ...formData, name: e.target.value})}
              />
            </div>

            <div className="form-group" style={formGroupStyle}>
              <input
                type="email"
                name="email"
                value={formData.email}
                // onChange={() => {}} - Hint: Implement this
                onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                placeholder="Email"
                data-testid='form-input-name'
                required
                style={{ ...inputStyle, ...(highlightInput ? highlight : {}) }}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="role"
                value={formData.role}
                // onChange={() => {}} - Hint: Implement this
                onChange={(e) => setFormData({ ...formData, role: e.target.value})}
                placeholder="Role"
                required
                style={inputStyle}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                data-testid="form-input-skill"
                type="text"
                name="skill"
                value={formData.skill}
                placeholder="Skill"
                style={inputStyle}
                onChange={(e)  => setFormData({ ...formData, skill: e.target.value})}
              />
              <button
                type="button"
                data-testid="add-btn"
                style={addSkillButtonStyle}
                onClick={handleAddSkill}
                disabled={isAddSkillDisabled}
                //disabled={formData.skill.trim() === '' || formData.skills.length >= 5}
              >
                Add Skill
              </button>
            </div>
            <div>
              {formData.skills.map((skill, index) => (
                <span key={index} data-testid='skill-tag' style={skillTagStyle}>
                  {skill}
                </span>
              ))}
            </div>
            <div style={buttonGroupStyle}>
              <button
                data-testid="submit-btn"
                type="submit"
                style={sharpEdgeButtonStyle}
                disabled={isSubmitDisabled}
              >
                Register
              </button>
              <button
                data-testid="reset-btn"
                type="button"
                style={sharpEdgeButtonStyle}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
          {registrationStatus && (
            // Hint: Implement this
            <div style={alertMessage}>{registrationStatus} </div>
            //console.log(registrationStatus)
          )}
          {emailExistsError &&(
            <div style={alertMessage}>Email already exists</div>
          )}

        </div>
      </div>
    </div>
  );
}

export default CandidateRegistration;
