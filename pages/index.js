import Head from 'next/head'
import Profile from './contents/profile'
import Education from './contents/education'
import Skill from './contents/skill'
import Experience from './contents/experience'
import Leisure from './contents/leisure'
import Contact from './contents/contact'

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nong Pongthorn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="nong,pongthorn,portfolio"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/* Div for My Profile */}
        <Profile></Profile>

        {/* Div for Education */}
        <Education></Education>

        {/* Div for Skill */}
        <Skill></Skill>

        {/* Div for Experience */}
        <Experience></Experience>

        {/* Div for Leisure */}
        <Leisure></Leisure>

        {/* Div for Contact */}
        <Contact></Contact>

      </div>
    </>
  )
}
