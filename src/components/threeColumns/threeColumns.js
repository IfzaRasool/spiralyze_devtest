import React from 'react';
import Img1 from '../assets/three1.png';
import Img2 from '../assets/three2.png';
import Img3 from '../assets/three3.png';

import styles from './threeColumns.module.scss';

const ThreeColumns = () => {
  return (
    <div className={styles.threeCols}>
      <div className="container">
        <div className="row">
          <div className={`col-4 ${styles.col}`}>
            <img
              className={`img-fluid ${styles.img}`}
              src={Img1}
              alt="Image1"
              width={371}
            />
          </div>
          <div className={`col-4 ${styles.col}`}>
            <img
              className={`img-fluid ${styles.img}`}
              src={Img2}
              alt="Image1"
              width={371}
            />
          </div>
          <div className={`col-4 ${styles.col}`}>
            <img
              className={`img-fluid ${styles.img}`}
              src={Img3}
              alt="Image1"
              width={371}
            />
          </div>
        </div>
        <div className="row pb-3">
          <div className="col">
            <div className="d-flex align-content-center align-items-center gap-5  ">
              <div class="font-effect d-flex gap-2">
                WE <div className="filled">UNDERSTAND</div>
              </div>
              <hr className={styles.hr} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p className="">
              Older adults want to play active and meaningful roles in their
              lives, including as part of a social network, a neighborhood, and
              a community. Service providers and policymakers must consider that
              a lack of sense of purpose can become problematic as people age.
              Engaging them in leisure activities and volunteer work is
              important.
            </p>
          </div>
          <div className="col-4">
            <p className="">
              Older adults want to play active and meaningful roles in their
              lives, including as part of a social network, a neighborhood, and
              a community. Service providers and policymakers must consider that
              a lack of sense of purpose can become problematic as people age.
              Engaging them in leisure activities and volunteer work is
              important.
            </p>
          </div>
          <div className="col-4">
            <p className="">
              To stimulate social contacts, neighborhood initiatives can be
              developed. Social meeting places, such as pubs and churches can
              help to foster the development of close and peripheral
              relationships.
            </p>
            <button className="btn btn-outline-success height">
              92% Success Rate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                className="ms-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3431 0.92888L16.7071 6.29284C17.0976 6.68336 17.0976 7.31653 16.7071 7.70705L11.3431 13.071C10.9526 13.4615 10.3195 13.4615 9.92893 13.071C9.53841 12.6805 9.53841 12.0473 9.92893 11.6568L13.5858 7.99995H0V5.99995H13.5858L9.92893 2.34309C9.53841 1.95257 9.53841 1.3194 9.92893 0.92888C10.3195 0.538355 10.9526 0.538355 11.3431 0.92888Z"
                  fill="#5BC8AF"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumns;
