import styles from '@/styles/Home.module.css'

export default function Education(){
    return (
        <div className={styles.content} id='education'>
            <div className={styles.header}>
                <hr/>
                <h2 className={styles.title} >Education</h2>
                <hr/>
            </div>
            <div className={styles.card}>
                <div className={styles.education}>
                    <div>
                        <h3 className='text-xl'>2012-2018 </h3>
                        <li>Sci-Math Section, Special Class "Gifted Program" at Sukhothaiwittayakom School, Sukhothai</li>
                    </div>

                    <div>
                        <h3 className='text-xl'>2018-2022 </h3>
                        <li>Department of Computer Engieneering, Faculty of Engineering at Chaing Mai University</li>
                    </div>
                </div>
            </div>
        </div>

        
    )
}