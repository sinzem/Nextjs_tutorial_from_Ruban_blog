import Image from "next/image";
import cats from "./0a49084c13ea4c8504b86b5356d1ae92.jpg";
import styles from "./about.module.css";

export default function AboutPage() {
    return <article className={styles.root}>
        <Image src={cats} loading="eager" alt="nice cats" />

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus unde, commodi blanditiis laudantium repudiandae enim! Hic ipsam tempora illo. Ex repellat cumque perspiciatis magni! Voluptatum mollitia odit reiciendis veritatis blanditiis illum. Porro omnis voluptate inventore, sed est architecto perferendis libero nostrum odit beatae ratione nam ut quod maxime quasi a repellat doloremque aperiam consequuntur quis eum iure amet! Ad assumenda sapiente provident eveniet saepe numquam, veniam deleniti praesentium vitae quaerat quos qui sequi ex modi voluptates voluptas. Deserunt, illo nostrum eos quae omnis ratione. Mollitia similique corporis explicabo eos fugiat quisquam veniam numquam eaque blanditiis placeat, aspernatur, expedita minus iure.
        </div>
    </article>
}