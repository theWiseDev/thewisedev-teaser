import React from 'react';

const Footer: React.FC  = () => {
  const date = new Date()
  return(
    <footer>
      <h2 className="footer-logo">theWiseDev</h2>
      <h3 className="footer-tagline">Code Wisely!</h3>
      <p className="footer-copyright">Copyright &copy; {date.getFullYear()} theWiseDev</p>
    </footer>
  );
}

export default Footer
