import React from 'react';
import styles from './footer.module.scss';
import trailvideo from '../assets/demomovie.mp4'

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className={`col-5 ${styles.left_sec}`}>
            <h1>WATCH THE VIDEO</h1>
            {/* <div className=''>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="755"
              height="648"
              viewBox="0 0 755 648"
              fill="none"
            >
              <path
                d="M0 0H719.719C635.252 274 831.175 323.5 719.719 648H0V0Z"
                fill="url(#paint0_linear_1_237)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_237"
                  x1="377.5"
                  y1="0"
                  x2="377.5"
                  y2="648"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#305D52" />
                  <stop offset="1" stop-color="#153F38" />
                </linearGradient>
              </defs>
            </svg>
            </div> */}
          </div>
          <div className={`col-5 ${styles.right_sec}`}>
          <div className="relative">
            
            <video
              controls
              loop
              autoPlay
              muted
              src={trailvideo}
              className="video"
            />
            <div className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="208"
              viewBox="0 0 208 208"
              fill="none"
            >
              <circle
                cx="104"
                cy="104"
                r="104"
                fill="#5BC8AF"
                fill-opacity="0.1"
              />
              <circle
                cx="104"
                cy="104"
                r="103"
                stroke="white"
                stroke-opacity="0.3"
                stroke-width="2"
              />
              <circle
                cx="104"
                cy="104"
                r="59.2692"
                fill="#5BC8AF"
                fill-opacity="0.8"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M120.123 101.149C122.209 102.353 122.209 105.363 120.123 106.567L95.7847 120.619C93.6995 121.823 91.093 120.318 91.093 117.91L91.093 89.8061C91.093 87.3983 93.6995 85.8935 95.7847 87.0974L120.123 101.149Z"
                fill="white"
              />
            </svg>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
