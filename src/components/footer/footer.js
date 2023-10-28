import React from 'react';
import styles from './footer.module.scss';
// import trailvideo from '../assets/demomovie.mp4';
import footer2 from '../assets/footer2.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="row">
        <div className={`col-6 ${styles.left_sec}`}>
          <div className="container">
            <div class={`font-effect white size d-flex gap-3 ${styles.video_heading}`}>
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
          <div class={styles.video_container}>
            <img src={footer2} alt="images" />
            <div class={styles.overlay}>
              <div class={styles.play_button}>
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

              <div class={styles.text}>Click to Play</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
