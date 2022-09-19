import React from 'react'
import styles from '../styles/IntroSection.module.css'
import { Box } from '@mui/system'
import Image from 'next/image'
import { Typography } from '@mui/material'

const IntroSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.bg}>
            <div className={styles.bgImage} />

            <div  className={styles.imageGradient}/>

            <div  className={styles.bgGradient}/>

            <div className={styles.meshBox}>
                <Box >
                    <Image
                        src="/assets/Mesh.svg"
                        alt="mesh"
                        layout="responsive"
                        width={1800}
                        height={1080}
                        className={styles.mesh}
                    />
                </Box>
            </div>
        </div>
        <div>
            <Typography className={styles.test}>we are an<br /> award-winning</Typography>
        </div>


    </div>
    
  )
}

export default IntroSection
