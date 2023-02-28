import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar() {
  const [percentage, setPercentage] = useState(0);
  
  useEffect(() => {
   setPercentage(10);
  }, [percentage]);

  return (
    <div>
      <div style={{ width: 150}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
}
export default CircularProgressBar;