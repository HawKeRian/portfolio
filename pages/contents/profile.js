import Image from "next/image"
import styles from '@/styles/Home.module.css'

export default function Profile(){
    return (
        <div className={styles.content} id='profile'>
            <div className={styles.header}>
                <hr/>
                <h2 className={styles.title} >My Profile</h2>
                <hr/>
            </div>
            <div className={styles.card}>
                <div className={styles.card_header}></div>
                <div className={styles.profile}>
                    <div>
                        <Image src={"/images/rin_huh.jpg"} width={360} height={100} alt="logo" />
                    </div>
                    <div>
                        <div className={styles.detail}>
                            <div>
                                <label>Name - Surname: </label>
                                <span className="uppercase">Pongthorn Sitthipongsathorn</span>
                            </div>

                            <div>
                                <label>Nick Name: </label>
                                <span className="uppercase">Nong</span>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div>
                                <label>Birthdate: </label>
                                <span>1999, November 29</span>
                            </div>

                            <div>
                                <label>Age: </label>
                                <span>22 years old</span>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div>
                                <label>Nationality: </label>
                                <span>Thai</span>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div>
                                <label>Address: </label>
                                <span>Amphur Muang, Sukhothai</span>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div>
                                <label>Occupation: </label>
                                <span>Computer Engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}