import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "../../App.css";
import styled from "styled-components";
import CPPIcon from "../../images/svg/CPPIcon";

function CircularProgressBar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(props.percentage);
  }, [percentage]);

  if (props.icon) {
    return (
      <StyledProgressBar>
        <div className="progress-bar-box">
          <div className="progress-bar-sizing">
            <CircularProgressbarWithChildren value={percentage}>
              <p>{props.skill}</p>
              {/* {props.skillIcon} */}
              {/* <FontAwesomeIcon
                icon={props.skillIcon}
                size="2x"
                style={{ color: "var(--accent-primary)" }}
              ></FontAwesomeIcon> */}
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </StyledProgressBar>
    );
  } else {
    return (
      <div style={{ margin: "5% 5%" }}>
        <p style={{ display: "flex", justifyContent: "center" }}>
          {props.skill}
        </p>
        <div className="progress-bar-sizing" style={{ width: 100 }}>
          <CircularProgressbarWithChildren value={percentage}>
            <p>C++</p>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    );
  }
}
export default CircularProgressBar;

export const StyledProgressBar = styled.div`
  margin: 2rem 2rem;

  @media (min-width: 1600px) {
    margin: 5rem 5rem;
  }

  p {
    font-size: 15px;
    display: flex;
    justify-content: center;
  }


  .progress-bar-sizing {
    width: 100px;
  }

  @media (max-width: 600px) {

    p {
      font-size: 12px;
    }

    .progress-bar-sizing {
      width: 75px;
    }
    }

  @media (min-width: 1200px) {
    p {
      font-size: 20px;
    }

    .progress-bar-sizing {
      width: 150px;
    }
  }


`;
