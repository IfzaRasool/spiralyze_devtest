import React, { useState } from 'react';
import styles from './footer.module.scss';
import videoUrl from '../assets/demomovie.mp4';
import footer2 from '../assets/footer2.png';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.footer}>
      <div className="row">
        <div className={`col-6 ${styles.left_sec}`}>
          <div className="container">
            <div
              className={`font-effect white size d-flex gap-3 ${styles.video_heading}`}
            >
              WATCH <div className="filled"> THE VIDEO</div>
            </div>
            <ul className={styles.ul}>
              <li>
                <h4>Needs Assessment</h4>
                <p>
                  The Advocacy Evaluation Toolkit contains the instruments used
                  to collect data for evaluating the Consumer Voices for
                  Coverage program.{' '}
                </p>
              </li>
              <li>
                <h4>Insurance Advocacy</h4>
                <p>
                  We are committed to advocating for appropriate coverage and
                  payment policies.
                </p>
              </li>
              <li>
                <h4>Treatment Planning & Placement</h4>
                <p>
                  Patients can better understand medical procedures, discharge
                  instructions, etc.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={`col-6 ${styles.right_sec}`}>
          {/* <div className={`${styles.container}`}>
            <div class="font-effect white size d-flex gap-3">
              WATCH <div className="filled"> THE VIDEO</div>
            </div>
            <ul>
              <li>
                <h4>Needs Assessment</h4>
                <p>The Advocacy Evaluation Toolkit contains the instruments used to collect data for evaluating the Consumer Voices for Coverage program. </p>
              </li>
              <li><h4>Insurance Advocacy</h4>
                <p>We are committed to advocating for appropriate coverage and payment policies.</p>
              </li>
              <li><h4>Treatment Planning & Placement</h4>
                <p>Patients can better understand medical procedures, discharge instructions, etc.</p>
              </li>
            </ul>
          </div> */}
          <div className={styles.video_container} onClick={openPopup}>
            <img src={footer2} alt="images" />
            <div class={styles.overlay}>
              <div class={styles.play_button}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="100"
                    fill="#5BC8AF"
                    fill-opacity="0.1"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="99"
                    stroke="white"
                    stroke-opacity="0.3"
                    stroke-width="2"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="76.0751"
                    fill="#5BC8AF"
                    fill-opacity="0.8"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M120.619 96.3543C123.286 97.8939 123.286 101.743 120.619 103.283L89.4939 121.253C86.8272 122.792 83.4939 120.868 83.4939 117.789L83.4939 81.8482C83.4939 78.769 86.8272 76.8445 89.4939 78.3841L120.619 96.3543Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div class={styles.text}>Click to Play</div>
            </div>
          </div>

          {/* pop up */}
          <div className="video-popup">
            <div className={`popup-content ${isOpen ? 'open' : ''}`}>
              <span className="close-button" onClick={closePopup}>
                &times;
              </span>
              <video controls src={videoUrl} autoPlay/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
