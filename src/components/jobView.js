import React from 'react';
import './jobView.css'

const JobView = ({ jobTitle }) => {
    return (
      <div className="job-view">
        {jobTitle && (
          <h2 className="job-title">{jobTitle}</h2>
        )}
      </div>
    );
  };

export default JobView;