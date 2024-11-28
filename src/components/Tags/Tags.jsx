import style from "./Tags.module.css"
import posts from "../../data/posts.js"

function Tags({ tags }) {

    let allTags = [];
    let uniqueTags = [];

    // Estrai tutti i tag dai post
    posts.forEach(post => {
        allTags = allTags.concat(post.tags); // Unisci tutti i tag in un unico array
    });

    // Rimuovi i duplicati con un ciclo
    for (let i = 0; i < allTags.length; i++) {
        if (!uniqueTags.includes(allTags[i])) {
            uniqueTags.push(allTags[i]); // Aggiungi solo i tag che non sono già presenti
        }
    }

    // Unisci i tag unici in una stringa separata da virgola
    const tagsToString = uniqueTags.join(", ");

    return (
        <div className={style.all_tags}>
            <h3>TAGS</h3>
            <p>{tagsToString}</p>
        </div>
    );
}

export default Tags