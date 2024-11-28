import style from "./PostCard.module.css"
import Button from "../Button/Button.jsx"

import image from "../../assets/ghepardo.jpg"

function PostCard() {
    return (
        <div className={style.card}>
            <img className={style.thumbnail} src={image} />
            <div className={style.card_body}>
                <h3>Titolo del post</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, quos iusto? Ea illo id perferendis, odit hic atque sequi esse!</p>
                <Button />
            </div>
        </div>
    )
}

export default PostCard