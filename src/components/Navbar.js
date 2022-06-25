import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsMicFill, BsFillGearFill, BsCaretLeftFill } from 'react-icons/bs';

const Navbar = () => {
  const navigate = useNavigate();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="header">
      {
        window.location.pathname === '/'
          ? (
            <button type="button">Home</button>
          )
          : (
            <button type="button" onClick={() => navigate(-1)}>
              <BsCaretLeftFill />
              Go Back
            </button>
          )
      }
      <span>
        {year}
        {' '}
        Exchange Stats
      </span>
      <div className="header-actions">
        <span><BsMicFill /></span>
        <span><BsFillGearFill /></span>
      </div>
    </div>
  );
};

export default Navbar;
