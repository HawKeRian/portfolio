import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <Link href={"/"}>
                    <Image src={"/images/Taka.jpeg"} width={100} height={100} alt="logo" />
                </Link>
            </div>
            <Link className="navMenu" href={"#profile"}>Profile</Link>
            <Link className="navMenu" href={"#education"}>Education</Link>
            <Link className="navMenu" href={"#skill"}>Skill</Link>
            <Link className="navMenu" href={"#experience"}>Experience</Link>
            <Link className="navMenu" href={"#leisure"}>Leisure & Hobby</Link>
            <Link className="navMenu" href={"#contact"}>Contact</Link>
        </nav>
    )
}