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
        <div className="row">
          <div className="col">
            <div className="d-flex align-content-center align-items-center  ">
              <h1>We Understand </h1>
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
            <button class="btn btn-outline-success">92% Success Rate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumns;
