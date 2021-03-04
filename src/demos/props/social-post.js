
import "./social-post.css";

function SocialPost({content, userName, numLikes = 0, numThumbsUp = 0, numSparkles = 0}){

    const clickLikes = () =>
    {
        numLikes += 1;
    }

    const clickThumbsUp = () =>
    {
        numThumbsUp += 1;
    }

    const clickSparkles = () =>
    {
        numSparkles += 1;
    }

    return (
        <div className="social-post--content">
            <div>{content}</div>
            <div>-{userName}</div>
            <button className="social-post--button" onClick={clickLikes}>{numLikes} ❤</button>
            <button className="social-post--button" onClick={clickThumbsUp}>{numThumbsUp} 👍</button>
            <button className="social-post--button" onClick={clickSparkles}>{numSparkles} ✨</button>
        </div>
    );
}


export default SocialPost;