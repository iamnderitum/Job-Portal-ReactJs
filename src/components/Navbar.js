import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px'
};


const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#525252',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const centerHeadingStyle = {
  marginLeft: '625px',
  flex: '1', // Allow it to take up the remaining space
};

const getCandidateCount = () => {
  const storedCandidates = localStorage.getItem('candidates');
  if (storedCandidates){
    const candidates = JSON.parse(storedCandidates);
    return candidates.length;
  }
  return 0;
};
function Navbar() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = React.useState(location.pathname);
  const[candidateCount, setCandidateCount] = React.useState(0)

  const updateCandidateCount = () => {
    const count = getCandidateCount();
    setCandidateCount(count);
  };

  React.useEffect(() => {
    updateCandidateCount();
  }, []);

  useLocation().pathname !== currentPage && setCurrentPage(location.pathname);

  return (
    <div style={navbarStyle}>
      <div style={centerHeadingStyle}>
        <h1 className="header-title" data-testid='header-title'>Job Portal</h1>
      </div>
      <div>
        {currentPage !== '/' && (
          <>
            <Link to="/" style={linkStyle}>Home</Link>
            {currentPage === '/candidate/registration' ? (
              <Link to="/candidate/list" style={linkStyle}>
                Candidate List {candidateCount}
              </Link>
            ) : (
              <Link to="/candidate/registration" style={linkStyle}>
                Candidate Registration
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
