const Statistics = ({
    title,
    state: { good, bad, neutral },
}) => {
    return (
        <>
           <p>{title}</p>
           <p>
               Good: <span>{good}</span>
           </p>
           <p>
               Neutral: <span>{neutral}</span>
           </p>
           <p>
               Bad: <span>{bad}</span>
           </p>
        </>
    );
};

export default Statistics;