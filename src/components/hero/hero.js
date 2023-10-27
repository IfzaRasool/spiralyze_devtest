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

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
          <div className="row">
            <div className="col-6">
              <h1>GET AN INTERVENTION</h1>
              <p>
                Showing greater respect to older adults can be done in several
                ways : acknowledging and putting to use the talents and skills
                of older adults; creating intergenerational initiatives; and
                allowing older adults to stay active and independent for as long
                as possible.
              </p>
            </div>
            <div className="col-6">
              <Container className={styles.contactform} maxWidth="xs">
                <h1>Contact Us</h1>
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
                      >
                        <MenuItem value="usa">USA</MenuItem>
                        <MenuItem value="canada">Canada</MenuItem>
                        <MenuItem value="uk">UK</MenuItem>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
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
      </div>
    </div>
  );
};

export default Hero;
