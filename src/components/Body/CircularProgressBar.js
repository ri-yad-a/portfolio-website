import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar(props) {
  const [percentage, setPercentage] = useState(0);
  
  useEffect(() => {
   setPercentage(props.percentage);
  }, [percentage]);

  return (
    <div style={{margin: '5% 5%'}}>
        <p style={{display:'flex', justifyContent:'center'}}>{props.skill}</p>
      <div style={{ width: 150}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
}
export default CircularProgressBar;