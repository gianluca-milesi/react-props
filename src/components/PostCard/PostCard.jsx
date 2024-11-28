import style from "./PostCard.module.css"
import Button from "../Button/Button.jsx"

import image from "../../assets/ghepardo.jpg"

function PostCard({ title, content, tags }) {

    const tagsToString = tags.join(", ")

    return (
        // <div className={`${published === true ? style.card : style.card_not_published}`}>
        <div className={style.card}>
            <img className={style.thumbnail} src={image} />
            <div className={style.card_body}>
                <h3>{title}</h3>
                <p>{tagsToString}</p>
                <p>{content}</p>
                <Button />
            </div>
        </div>
    )
}

export default PostCard