const Statistics = ({
    title,
    state: { good, bad, neutral },
    countTotalFeedback,
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
           {countTotalFeedback > 0 ? (
              <p>
                Total: <span>{countTotalFeedback}</span>
              </p>
           ) : (
            ''
           )}
        </>
    );
};

export default Statistics;