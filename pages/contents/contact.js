import Link from "next/link"
import Image from "next/image"
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
                    <Image className="hover:scale-150" src={"/logos/email.png"} width={100} height={100} alt="logo" />
                    <Image className="hover:scale-150" src={"/logos/facebook.png"} width={100} height={100} alt="logo" />
                    <Image className="hover:scale-150" src={"/logos/line.png"} width={100} height={100} alt="logo" />
                    <Image className="hover:scale-150" src={"/logos/linkedin.png"} width={100} height={100} alt="logo" />

                    <Link target="_blank" href={"https://github.com/HawKeRian"}>
                        <Image className="hover:scale-150" src={"/logos/github.png"} width={100} height={100} alt="logo" />
                    </Link>
                </div>
            </div>
        </div>
    )
}