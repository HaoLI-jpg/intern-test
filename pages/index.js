import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import EnterSection from '../components/EnterSection'
import IntroSection from '../components/IntroSection'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { LinkSection } from '../components/LinkSection'
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
          <ParallaxLayer
            offset={3}
            >
            <LinkSection />
          </ParallaxLayer>
        </Parallax>
      </div>
  )
}
