import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" mt={4}>
        <Grid item xs={12} sm={5} lg={4} textAlign="center">
          <Image src='/images/logos/logoIcon.svg' alt="icon" width={35} height={35} />
          <Typography fontSize="16" color="textSecondary" mt={1} mb={4}>
            All rights reserved by Retail Demo Store. Designed & Developed by
            <Link target="_blank" href="https://retaildemo.net/">
              <Typography color="textSecondary" component="span" display="inline">
                {' '}
                Retail Demo
              </Typography>{' '}
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
