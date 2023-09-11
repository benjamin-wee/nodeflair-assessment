// src/components/Card.js
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaMapMarkerAlt, FaStar} from "react-icons/fa";
import './Card.css';

const Card = ({ company, jobTitle, imageUrl, uploadTime, location, rating, estimatedSalary, role, skills, onClick, isSelected}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const handleClick = () => {
    if (onClick && !isMobile) {
      onClick();
    }
  };

  return (
    <div className={`card ${isSelected && isDesktop ? 'selected-card' : ''}`} style={{ display: 'flex', flexDirection: 'column'}} onClick={handleClick}>
      <div className="card-content">
        {/* Div containing image and job desc */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* Company logo image */}
          <img src={imageUrl} alt={company} className="card-image" />
          {/* job details */}
          <div className="text-content">
            <div>
              <p className="company-name">
                <sub style={{marginRight: '10px'}}> {company} </sub>
                <sub> {rating} </sub>
                <FaStar className='star-icon'/>
              </p>
            </div>
            <p className="job-title" style={{ marginTop: '-10px'}}>
              <strong>{jobTitle}</strong>
            </p>
            <div className="upload-time">
              <sub className='upload-time-text'> {uploadTime} </sub>
              <FaMapMarkerAlt className='map-marker-icon'/>
              <sub className='location-text'> {location} </sub>
            </div>
            <div className="estimated-salary">
              <sub style={{marginRight:'8px'}}>
                {estimatedSalary}
              </sub>
              {estimatedSalary && (
                <div className='est'>
                  EST
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Role at top right corner */}
        <div className="role-box">
          <p className='role-text'>
            {role}
          </p>
        </div>
      </div>
      <div className="horizontal-line" ></div>
      <div className="techstack-container">
        {skills.map((skill, index) => (
          <div className="techstack-box" key={index} >
            <p  className="techstack-text">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
