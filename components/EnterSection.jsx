import React from 'react'
import styles from '../styles/EnterSection.module.css'
import { Box } from '@mui/system'
import Image from 'next/image'

function EnterSection() {
  return (
    <div className={styles.bg}>
        <Box width="auto" height="auto" className={styles.logo}>
            <Image
                src="/assets/LogoLarge.svg"
                alt='navbar-logo'
                width={1800}
                height={100}
                layout='responsive'
            />
        </Box>
    </div>
  )
}

export default EnterSection
