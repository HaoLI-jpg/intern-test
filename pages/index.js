import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import EnterSection from '../components/EnterSection'
import IntroSection from '../components/IntroSection'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { PictureSection } from '../components/PictureSection'

export default function Home() {
  return (
      <div>
        <Header />
        <Parallax pages={4}>
          <ParallaxLayer
            offset={0}
          >
            <EnterSection />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            >
            <IntroSection />
          </ParallaxLayer>
        </Parallax>
      </div>
  )
}
