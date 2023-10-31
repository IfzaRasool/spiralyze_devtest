import React, { useState } from 'react';
import Header from '../header/header';
import styles from './hero.module.scss';
import {
  Container,
  Grid,
  TextField,
  Button,
  Alert,
  MenuItem,
} from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//   input: {
//     color: 'blue', // Change text color here
//   },
//   label: {
//     color: 'green', // Change label color here
//   },
// }));

const Hero = () => {
  // const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessemail: '',
    Company: '',

    country: '',
  });
  const [thankYou, setThankYou] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setThankYou(true);
  };

  return (
    <div>
      <div className={styles.hero}>
        <Header />
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 col-sm-12">
              <div class="font-effect white">
                GET AN <div className="filled">INTERVENTION</div>
              </div>
              <p className="pe-5">
                Showing greater respect to older adults can be done in several
                ways : acknowledging and putting to use the talents and skills
                of older adults; creating intergenerational initiatives; and
                allowing older adults to stay active and independent for as long
                as possible.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <Container className={styles.contactform} maxWidth="xs">
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        sx={{
                          input: { color: 'white' },
                          label: { color: 'white' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        sx={{
                          input: { color: 'white' },
                          label: { color: 'white' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="businessemail"
                        label="Business Email"
                        variant="outlined"
                        fullWidth
                        required
                        color="info"
                        value={formData.businessemail}
                        onChange={handleInputChange}
                        sx={{
                          input: { color: 'white' },
                          label: { color: 'white' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="company"
                        label="Company"
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        sx={{
                          input: { color: 'white' },
                          label: { color: 'white' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="country"
                        label="Country"
                        variant="outlined"
                        select
                        fullWidth
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        sx={{
                          input: { color: 'white' },
                          label: { color: 'white' },
                        }}
                        SelectProps={{
                          sx: { color: 'White' }, // Change 'red' to the desired text color
                        }}
                      >
                        <MenuItem value="usa" sx={{ color: 'red' }}>
                          USA
                        </MenuItem>
                        <MenuItem value="canada">Canada</MenuItem>
                        <MenuItem value="uk">UK</MenuItem>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Button type="submit" variant="contained">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="pe-2"
                    >
                      <g clip-path="url(#clip0_1_118)">
                        <path
                          d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_118">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Submit
                  </Button>
                </form>

                {thankYou && (
                  <Alert severity="success" style={{ marginTop: '16px' }}>
                    Thank you for your submission!
                  </Alert>
                )}
              </Container>
            </div>
          </div>
        </div>

        <div className={styles.svg}>
          <svg viewBox="0 0 1440 320">
            <path
              fill="#F5F5F5"
              fill-opacity="1"
              d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <svg className={styles.backsvg} viewBox="0 0 1440 320">
            <path
              fill="#F5F5F5"
              fill-opacity="0.4"
              d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
