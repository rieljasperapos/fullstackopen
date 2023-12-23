import { useState } from 'react';

interface FeedbackState {
  good: number;
  neutral: number;
  bad: number;
}

const initialState = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedback, setFeedback] = useState<FeedbackState>(initialState);

  const handleFeedbackClick = (type: keyof FeedbackState) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <>
      <div>
        <div>
          <h1>give feedback</h1>
          <button onClick={() => handleFeedbackClick('good')}>good</button>
          <button onClick={() => handleFeedbackClick('neutral')}>neutral</button>
          <button onClick={() => handleFeedbackClick('bad')}>bad</button>
        </div>
        <div>
          <h1>Statistics</h1>
          <p>good {feedback.good}</p>
          <p>neutral {feedback.neutral}</p>
          <p>bad {feedback.bad}</p>
        </div>
      </div>
    </>
  );
}

export default App;
