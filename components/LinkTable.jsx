import { Typography } from '@mui/material'
import React from 'react'
import styles from "../styles/LinkSection.module.css"

const links = [
    {link:"cqs", desc:"29m DSS Super-Maxi Race Yatch"},
    {link:"anarchy", desc:"YD 37.11M Club Racer"},
    {link:"a fork in the road", desc:"13.7M IRC Race Yacht"},
    {link:"general lee", desc:"11.3M IRC Race Yacht"},
    {link:"Zana/Konica Minolta/Lahana",desc:"30m Super-Maxi"},
    {link:"wired", desc:"15.85m Canting Keel Racer/Cruiser"},
    {link:"jass player", desc:"12m Production One Design Racer / Cruiser"},
    {link:"braveheart /valkyrie", desc:"15.85m TP52 Carbon Race Yacht"},
    {link:"NZL-403",desc:"Mini 650 Carbon Race Yacht"},
    {link:"time to burn", desc:"12.5m Cruiser / Racer"},
]

const description = [

]

const LinkTable = () => {
  return (
    <div className={styles.linkTable}>
        <div className={styles.underLine}></div>
      {links.map((e) => (
        <div key={e}>
            <div className={styles.column}>
                <Typography className={styles.linkFont}>{e.link}</Typography>
                <Typography className={styles.linkDesc}>{e.desc}</Typography>
            </div>
            <div className={styles.underLine}></div>
        </div>
      ))}
      <Typography className={styles.moreButton}>View more</Typography>
      <div className={styles.underLine}></div>
    </div>
  )
}

export default LinkTable
