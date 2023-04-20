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
                    <div className={styles.leisure_list}>Draw Anime Illustrations</div>
                    <div className={styles.leisure_list}>Learn Japanese Language</div>
                    <div className={styles.leisure_list}>Listen to Musics</div>
                    <div className={styles.leisure_list}>Write a Fiction</div>
                </div>
            </div>
        </div>
    )
}