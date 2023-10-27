import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from '../assets/card1.png';
import Img2 from '../assets/card2.png';
import Img3 from '../assets/card3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './carousel.module.css';
import styles from './carousel.module.scss';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#5BC8AF',
          '--swiper-pagination-color': '#5BC8AF',
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={Img1} alt="images" />

            <div className={styles.card}>
              <div className='d-flex justify-content-between align-items-end'>
              <h2 className={styles.card_title}>Abbie Harvey</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="47"
                viewBox="0 0 60 47"
                fill="none"
              >
                <path
                  d="M19.5804 21.9794C21.9114 22.9931 23.7296 24.5137 25.035 26.5412C26.3403 28.5686 26.993 30.9647 26.993 33.7294C26.993 37.6922 25.7343 40.9176 23.2168 43.4059C20.6993 45.802 17.4825 47 13.5664 47C9.65035 47 6.38695 45.7559 3.77622 43.2676C1.25874 40.7794 0 37.6 0 33.7294C0 31.8863 0.2331 30.0431 0.699301 28.2C1.1655 26.3569 2.19114 23.5922 3.77622 19.9059L11.8881 0H25.7343L19.5804 21.9794ZM52.5874 21.9794C54.9184 22.9931 56.7366 24.5137 58.042 26.5412C59.3473 28.5686 60 30.9647 60 33.7294C60 37.6922 58.7413 40.9176 56.2238 43.4059C53.7063 45.802 50.4895 47 46.5734 47C42.6573 47 39.3939 45.7559 36.7832 43.2676C34.2657 40.7794 33.007 37.6 33.007 33.7294C33.007 31.8863 33.2401 30.0431 33.7063 28.2C34.1725 26.3569 35.1981 23.5922 36.7832 19.9059L44.8951 0H58.7413L52.5874 21.9794Z"
                  fill="#2A7C6B"
                />
              </svg>
              </div>
              <p className={styles.card_description}>
                I have been caring for my mom & dad off and on for about 10
                years now, and I know the importance of me being there for
                appointments. Older people need attention, love and care that
                they truly deserve.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={Img2} alt="images" />
            <div className={styles.card}>
              <div className='d-flex justify-content-between align-items-end'>
              <h2 className={styles.card_title}>Abbie Harvey</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="47"
                viewBox="0 0 60 47"
                fill="none"
              >
                <path
                  d="M19.5804 21.9794C21.9114 22.9931 23.7296 24.5137 25.035 26.5412C26.3403 28.5686 26.993 30.9647 26.993 33.7294C26.993 37.6922 25.7343 40.9176 23.2168 43.4059C20.6993 45.802 17.4825 47 13.5664 47C9.65035 47 6.38695 45.7559 3.77622 43.2676C1.25874 40.7794 0 37.6 0 33.7294C0 31.8863 0.2331 30.0431 0.699301 28.2C1.1655 26.3569 2.19114 23.5922 3.77622 19.9059L11.8881 0H25.7343L19.5804 21.9794ZM52.5874 21.9794C54.9184 22.9931 56.7366 24.5137 58.042 26.5412C59.3473 28.5686 60 30.9647 60 33.7294C60 37.6922 58.7413 40.9176 56.2238 43.4059C53.7063 45.802 50.4895 47 46.5734 47C42.6573 47 39.3939 45.7559 36.7832 43.2676C34.2657 40.7794 33.007 37.6 33.007 33.7294C33.007 31.8863 33.2401 30.0431 33.7063 28.2C34.1725 26.3569 35.1981 23.5922 36.7832 19.9059L44.8951 0H58.7413L52.5874 21.9794Z"
                  fill="#2A7C6B"
                />
              </svg>
              </div>
              <p className={styles.card_description}>
                I have been caring for my mom & dad off and on for about 10
                years now, and I know the importance of me being there for
                appointments. Older people need attention, love and care that
                they truly deserve.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="swiper-zoom-container">
            <img src={Img3} alt="images" />
            <div className={styles.card}>
              <div className='d-flex justify-content-between align-items-end'>
              <h2 className={styles.card_title}>Abbie Harvey</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="47"
                viewBox="0 0 60 47"
                fill="none"
              >
                <path
                  d="M19.5804 21.9794C21.9114 22.9931 23.7296 24.5137 25.035 26.5412C26.3403 28.5686 26.993 30.9647 26.993 33.7294C26.993 37.6922 25.7343 40.9176 23.2168 43.4059C20.6993 45.802 17.4825 47 13.5664 47C9.65035 47 6.38695 45.7559 3.77622 43.2676C1.25874 40.7794 0 37.6 0 33.7294C0 31.8863 0.2331 30.0431 0.699301 28.2C1.1655 26.3569 2.19114 23.5922 3.77622 19.9059L11.8881 0H25.7343L19.5804 21.9794ZM52.5874 21.9794C54.9184 22.9931 56.7366 24.5137 58.042 26.5412C59.3473 28.5686 60 30.9647 60 33.7294C60 37.6922 58.7413 40.9176 56.2238 43.4059C53.7063 45.802 50.4895 47 46.5734 47C42.6573 47 39.3939 45.7559 36.7832 43.2676C34.2657 40.7794 33.007 37.6 33.007 33.7294C33.007 31.8863 33.2401 30.0431 33.7063 28.2C34.1725 26.3569 35.1981 23.5922 36.7832 19.9059L44.8951 0H58.7413L52.5874 21.9794Z"
                  fill="#2A7C6B"
                />
              </svg>
              </div>
              <p className={styles.card_description}>
                I have been caring for my mom & dad off and on for about 10
                years now, and I know the importance of me being there for
                appointments. Older people need attention, love and care that
                they truly deserve.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
