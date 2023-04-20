import styles from '@/styles/Home.module.css'

export default function Leisure(){
    return (
        <div className={styles.content} id='leisure'>
            <div className={styles.header}>
                <hr/>
                <h2 className={styles.title} >Leisure</h2>
                <hr/>
            </div>
            <div className={styles.card}>
                <div className={styles.leisure}>
                    <div>
                        <li>Draw Illustrations</li>
                        <li>Learn Japanese Language</li>
                        <li>Listen musics</li>
                    </div>
                </div>
            </div>
        </div>
    )
}