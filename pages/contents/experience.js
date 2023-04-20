import styles from '@/styles/Home.module.css'

export default function Experience(){
    return (
        <div className={styles.content} id='experience'>
            <div className={styles.header}>
                <hr/>
                <h2 className={styles.title} >Experience</h2>
                <hr/>
            </div>
            <div className={styles.card}>
                <div className={styles.experience}>
                    <div>
                        <span className='text-xl'>2022 - Present</span> (11 months)
                        <li>Innovation Engineer - MuRata Thailand</li>
                    </div>

                    <div>
                        <h3 className='text-lg'>Job Details </h3>
                        <li>Full-Stack Web Developer</li>
                        <li>Data Engineer</li>
                        <li>Database Engineer</li>
                    </div>
                </div>
            </div>
        </div>
    )
}