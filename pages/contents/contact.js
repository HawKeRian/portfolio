import styles from '@/styles/Home.module.css'

export default function Contact(){
    return (
        <div className={styles.content} id='contact'>
            <div className={styles.header}>
                <hr/>
                <h2 className={styles.title} >Contact</h2>
                <hr/>
            </div>
            <div className={styles.card}>
                <div className={styles.contact}>
                    <div>
                        <li>Email : pongthorn.s1999@gmail.com</li>
                        <li>Facebook : Nong Pongthorn</li>
                        <li>Line: nongza235</li>
                        <li>Linkedin: Pongthorn Sitthipongsathorn</li>
                        <li>Github: HawKeRian</li>
                    </div>
                </div>
            </div>
        </div>
    )
}