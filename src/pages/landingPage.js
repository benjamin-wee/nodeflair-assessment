import React, { useState } from 'react';
import Card from '../components/Card';
import './landingPage.css';
import JobView from '../components/jobView';
import jobData from '../jobData'; 
import { useMediaQuery } from 'react-responsive';

const LandingPage = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (jobTitle) => {
        setSelectedCard(jobTitle);
    };

    return (
        <div className="landing-page" style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            <div className="card-stack" style={{alignSelf:'start'}}>
                {jobData.map((job, index) => (
                <Card
                    key={index}
                    company={job.company}
                    jobTitle={job.jobTitle}
                    imageUrl={job.imageUrl}
                    uploadTime={job.uploadTime}
                    location={job.location}
                    rating={job.rating}
                    estimatedSalary={job.estimatedSalary}
                    role={job.role}
                    skills={job.skills}
                    onClick={isDesktop ? () => handleCardClick(job.jobTitle) : null}
                    isSelected={selectedCard === job.jobTitle}
                />
                ))}
            </div>
            {isDesktop && <JobView jobTitle={selectedCard}/>}
        </div>
    );
};

export default LandingPage;

