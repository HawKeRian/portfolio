import styles from '@/styles/Home.module.css'

export default function Skill(){
    return (
        <div className={styles.content} id='skill'>
            <div className={styles.header}>
                <hr/>
                <h2 className={styles.title} >Skill</h2>
                <hr/>
            </div>
            <div className={styles.card}>
                <div className={styles.skill}>
                    <div>
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>Javascript</li>
                        <li>Python</li>
                    </div>

                    <div>
                        <li>Laravel</li>
                        <li>NextJS</li>
                        <li>NodeJS</li>
                        <li>Bootstrap Theme</li>
                        <li>TailwindCSS Theme</li>
                    </div>
                </div>
            </div>
        </div>
    )
}