import Head from 'next/head'
import Image from 'next/image'
import Profile from './contents/profile'
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
        <div className={styles.content} id='education'>
          <h2 className={styles.title}>Education</h2>
        </div>

        {/* Div for Skill */}
        <div className={styles.content} id='skill'>
          <h2 className={styles.title}>Skill</h2>
        </div>

        {/* Div for Experience */}
        <div className={styles.content} id='experience'>
          <h2 className={styles.title}>Experience</h2>
        </div>

        {/* Div for Experience */}
        <div className={styles.content} id='leisure'>
          <h2 className={styles.title}>Leisure Activity & Hobby</h2>
        </div>

        {/* Div for Contact */}
        <div className={styles.content} id='contact'>
          <h2 className={styles.title}>Contact Me</h2>
        </div>

      </div>
    </>
  )
}
