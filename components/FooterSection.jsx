import React from 'react'
import styles from '../styles/FooterSection.module.css'
import { Button, Typography, Box, createTheme, ThemeProvider } from '@mui/material'
import Image from 'next/image'

const theme = createTheme({
    // your other theme settings here
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            '&:hover': {
              backgroundColor: "white",
              color: "black"
            },
          }),
        },
      },
    },
  });

const FooterSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.contactInfo}>
            <div>
                <Typography className={styles.contactsFont}>info@bakewell-white.com</Typography>
                <Typography className={styles.contactsFont}>+64 9 480 6800</Typography>
                <Typography className={styles.contactsFont}>EST. 1994</Typography>
            </div>
            <Typography className={styles.titleFont}>Get in touch</Typography>
            <div style={{textAlign: "end"}}>
                <Typography className={styles.contactsFont}>Privacy Policy</Typography>
                <Typography className={styles.contactsFont}>Facebook</Typography>
                <Typography className={styles.contactsFont}>Linkedin</Typography>
            </div>
        </div>
        
        <ThemeProvider theme={theme}>
        <Button className={styles.button}>
                <Typography className={styles.buttonFont}>
                    see all designs<br />
                </Typography>
                    <Box width={60} height={16} className={styles.arrow}>
                        <Image
                            src="/assets/Arrow.svg"
                            alt="mesh"
                            layout="responsive"
                            width={60}
                            height={16}
                        />
                    </Box>
            </Button>
        </ThemeProvider>
    </div>
  )
}

export default FooterSection
