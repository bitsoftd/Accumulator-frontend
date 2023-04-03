import React from "react";
import Icon from "./Icon";
import styled from "styled-components";

const Svg = styled(Icon)`
  margin: 10px;
  width: 53px;
  height: 54.96px;
  max-width: 180px;
  height: auto;
`;

const SvgIcon = styled(Icon)`
  margin: 60px;
  width: 60px;
  height: 54.96px;
  max-width: 180px;
  height: auto;
`;

const SvgImg = styled(Icon)`
  margin: 60px;
  width: 60px;
  height: 54.96px;
  max-width: 180px;
  height: auto;
`;

export const AccumulatorSvg = () => (
  <Svg
    width="53"
    height="55"
    viewBox="0 0 53 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="26.4996"
      cy="28.9898"
      r="21.2534"
      stroke="white"
      stroke-width="3.37919"
    />
    <g clip-path="url(#clip0_31_358)">
      <path
        d="M16.2025 28.2423L26.5895 1.77856L41.7991 40.5212L37.5457 44.4352L26.5895 14.5803C26.5895 14.5803 25.8805 23.7094 21.9653 27.2115C20.6154 28.4189 18.6931 28.7954 18.0526 29.7014C17.412 30.6074 17.4625 31.777 18.1415 32.4581C19.2435 33.5634 21.1353 32.3692 21.9653 31.4799C20.1868 33.5549 15.7049 38.6474 12.0056 42.4178C8.30624 46.1883 3.88365 47.783 2.13477 48.1091C2.72761 47.9609 4.32235 46.8641 5.95859 43.6628C7.59483 40.4614 11.5017 31.8356 13.2505 27.9229L12.4502 32.1913L15.2958 27.1225L14.6734 31.1242L16.2025 28.2423Z"
        fill="white"
      />
    </g>
    <g clip-path="url(#clip1_31_358)">
      <path
        d="M36.7975 28.2423L26.4105 1.77856L11.2009 40.5212L15.4543 44.4352L26.4105 14.5803C26.4105 14.5803 27.1195 23.7094 31.0347 27.2115C32.3846 28.4189 34.3069 28.7954 34.9474 29.7014C35.588 30.6074 35.5375 31.777 34.8585 32.4581C33.7565 33.5634 31.8647 32.3692 31.0347 31.4799C32.8132 33.5549 37.2951 38.6474 40.9944 42.4178C44.6938 46.1883 49.1164 47.783 50.8652 48.1091C50.2724 47.9609 48.6777 46.8641 47.0414 43.6628C45.4052 40.4614 41.4983 31.8356 39.7495 27.9229L40.5498 32.1913L37.7042 27.1225L38.3266 31.1242L36.7975 28.2423Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_31_358">
        <rect width="26.5" height="54.9564" fill="white" />
      </clipPath>
      <clipPath id="clip1_31_358">
        <rect
          width="26.5"
          height="54.9564"
          fill="white"
          transform="matrix(-1 0 0 1 53 0)"
        />
      </clipPath>
    </defs>
  </Svg>
);
