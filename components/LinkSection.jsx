import { Typography } from '@mui/material'
import React from 'react'
import styles from "../styles/LinkSection.module.css"
import {Box} from '@mui/material'
import Image from 'next/image'
import LinkTable from './LinkTable'

export const LinkSection = () => {
  return (
    <div className={styles.container}>
        <Typography className={styles.title}>Award-winning designs</Typography>

        <Box width={791} height={624} className={styles.sphere}>
            <Image
                src="/assets/Mesh2.svg"
                alt="mesh"
                layout="responsive"
                width={791}
                height={624}
            />
        </Box>

        <LinkTable />
    </div>

    
  )
}
