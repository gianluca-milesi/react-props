import style from "./PostCard.module.css"
import Button from "../Button/Button.jsx"
import placeHolderImage from "../../assets/placeholder.png"

function PostCard({ image, title, tags, content }) {

    const tagsToString = tags.join(", ")
    // function tagsColor(tag) {
    //     if (tag === "html") return "red";
    //     if (tag === "css") return "blue";
    //     if (tag === "js") return "yellow";
    //     return "black";
    // }

    return (
        <div className={style.card}>
            <img className={style.thumbnail} src={image || placeHolderImage} />
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