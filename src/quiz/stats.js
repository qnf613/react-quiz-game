/**
 * The Stats component renders the score and current question number.
 */
import "./stats.css";

function Stat({label, value}) {
    return(
        <li className="stats__stat-container">
            <div className="stats__stat-label">{label}:</div>
            <div className="stats__stat-value">{value}</div>
        </li>
    );
}

/**
 * the stats component renders the score and current quiestion number
 * @param {object} props
 * @param {number} props.score
 * @param {number} props.questionNumber
 * @param {number} props.totalQuestions
 */

function Stats({ score, questionNumber, totalQuestions}) {
    return (
        <ul className="stats">
            <Stat label="Score" value={score}/>
            <Stat label="Question Number" value={`${questionNumber} / ${totalQuestions}`}/>
        </ul>

    );
}

export default Stats;