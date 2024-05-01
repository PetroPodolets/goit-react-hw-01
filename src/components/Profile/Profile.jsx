import css from "./Profile.module.css"


export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
    return (
        <div className={css.container}>
            <div className={css.content}>
                <img className={css.image}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p className={css.descr}>@{tag}</p>
                <p className={css.descr}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.stats}>Followers</span>
                    <span className={css.number}>{followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.stats}>Views</span>
                    <span className={css.number}>{views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.stats}>Likes</span>
                    <span className={css.number}>{likes}</span>
                </li>
            </ul>
        </div>
    );
} 