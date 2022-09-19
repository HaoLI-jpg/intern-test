import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import {Toolbar} from '@mui/material';
import Image from 'next/image';
import {Box}from '@mui/material';
import styles from '../styles/Header.module.css'


function Header() {
  return (
    <div>

        <AppBar position="fixed" className={styles.nav}>
            <Toolbar className={styles.toolbar}>

                    <Typography className={styles.syneBold}>
                        EXTERTISE
                    </Typography>

                    <Typography className={styles.syneBold}>
                    PORTFOLIO
                    </Typography>

                    <Box width={329} height={19} className={styles.logo}>
                        <Image
                            src="/assets/Logo.svg"
                            alt='navbar-logo'
                            width={329}
                            height={19}
                            layout='responsive'
                        />
                    </Box>

                    <Typography className={styles.syneBold}>
                    AWARDS
                    </Typography>

                    <Typography className={styles.syneBold}>
                    CONTACT US
                    </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header
