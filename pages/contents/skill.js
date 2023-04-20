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
                        <h2>Front-End</h2>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </div>

                    <div>
                        <h2>Theme & Framework</h2>
                        <li>Bootstrap5</li>
                        <li>TailwindCSS</li>
                        <li>Laravel Framework</li>
                        <li>NextJS Framework</li>
                    </div>

                    <div>
                        <h2>Programming Language</h2>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>NodeJS</li>
                        <li>Java</li>
                        <li>C++</li>
                    </div>

                    <div>
                        <h2>Developer's skills</h2>
                        <li>Git</li>
                        <li>DevOps</li>
                        <li>SQL</li>
                        <li>Data Pipeline</li>
                        <li>Data Visualization</li>
                        <li>Machine Learning</li>
                    </div>
                </div>
            </div>
        </div>
    )
}