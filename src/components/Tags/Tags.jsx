import style from "./Tags.module.css"
import posts from "../../data/posts.js"

function Tags({ tags }) {

    let allTags = [];
    let uniqueTags = [];

    posts.forEach(post => {
        allTags = allTags.concat(post.tags);
    });

    for (let i = 0; i < allTags.length; i++) {
        if (!uniqueTags.includes(allTags[i])) {
            uniqueTags.push(allTags[i]);
        }
    }

    const tagsToString = uniqueTags.join(", ");

    return (
        <div className={style.all_tags}>
            <h3>TAGS</h3>
            <p>{tagsToString}</p>
        </div>
    );
}

export default Tags