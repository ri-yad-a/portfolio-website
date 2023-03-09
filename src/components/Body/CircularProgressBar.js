import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import '../../App.css';

function CircularProgressBar(props) {
  const [percentage, setPercentage] = useState(0);
  
  useEffect(() => {
   setPercentage(props.percentage);
  }, [percentage]);

  return (
    <div style={{margin: '5% 5%'}}>
        <p style={{display:'flex', justifyContent:'center'}}>{props.skill}</p>
      <div className="progress-bar-sizing" style={{ width: 150}}>
        <CircularProgressbarWithChildren value={percentage}>
          <FontAwesomeIcon icon={props.skillIcon} size="3x" style={{color: "var(--accent-primary)"}}></FontAwesomeIcon>
        </CircularProgressbarWithChildren>
      </div>

    </div>
  );
}
export default CircularProgressBar;