import React from 'react';

import styles from './fourthSec.module.scss';

const FourthSec = () => {
  return (
    <div className={styles.threeCols}>
      <div className="container">
        <div class="font-effect d-flex gap-3">
                WE <div className="filled">CAN ORGANIZE EVERYTHING</div>
              </div>
        <div className="row">
          <div className={`col-md-4 col-xs-12 ${styles.col}`}>
            <p className='fst-italic'>
              <span className='fw-bold'>Interventions</span> should focus on older adult’s desire for
              connectedness, participation and independence.
            </p>
            </div>
            <div className={`col-md-4 col-xs-6 ${styles.col}`}>
            <p>
              Loneliness and social isolation are growing public health concerns
              in our aging society. Whilst these experiences occur across the
              life span, 50% of individuals aged over 60 are at risk of social
              isolation and one-third will experience some degree of loneliness
              later in life. It is vital to reduce loneliness and social
              isolation among older adults.
            </p>
            </div>
            <div className={`col-md-4 col-xs-6 ${styles.col}`}>
            <p>
              The methodology framework proposed by Asked and O’Malley and
              further developed by Levac, et al. was used to guide the scoping
              review process. A total of 33 reviews met the inclusion criteria,
              evaluating a range of interventions targeted at older people
              residing in the community or institutionalised settings.
            </p>
            </div>
          </div>
          <div className='row'>
          <div className={`col-md-4 col-sm-6 ${styles.col}`}>
            <button className="btn btn-outline-success">
              Needs Assessment
            </button>
            <button className="btn btn-outline-success">
              Insurance Advocacy
            </button>
          </div>
          <div className={`col-md-4 col-sm-6 ${styles.col}`}>
            <button className="btn btn-outline-success">
            Treatment Planning & Placement
            </button>
            <button className="btn btn-outline-success">
            Employment Advocacy
            </button>
          </div>
          <div className={`col-md-4 col-sm-12 ${styles.col}`}>
            <button className="btn btn-outline-success">
            Transportation & Logistics
            </button>
            <button className="btn btn-outline-success">
            Aftercare Planning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSec;
