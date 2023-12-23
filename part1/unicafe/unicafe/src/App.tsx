import { useState } from 'react';
import Statistics from './components/Statistics';

interface StatisticsData {
  good: number;
  neutral: number;
  bad: number;
  totalFeedback: number;
  average: number;
  percentage: number;
}

const initialStatisticsState: StatisticsData = {
  good: 0,
  neutral: 0,
  bad: 0,
  totalFeedback: 0,
  average: 0,
  percentage: 0,
};

function App() {
  const [statistics, setStatistics] = useState<StatisticsData>(initialStatisticsState);

  const handleFeedbackClick = (type: keyof StatisticsData) => {
    setStatistics((prevStatistics) => {
      const newStatistics = {
        ...prevStatistics,
        [type]: prevStatistics[type] + 1,
        totalFeedback: prevStatistics.totalFeedback + 1
      };

      const newAverage = newStatistics.totalFeedback === 0 ? 0 : (newStatistics.good - newStatistics.bad) / newStatistics.totalFeedback;
      const newPercentage = newStatistics.totalFeedback === 0 ? 0 : (newStatistics.good / newStatistics.totalFeedback) * 100;

      return {
        ...newStatistics,
        average: newAverage,
        percentage: newPercentage,
      };
    });
  };

  console.log(statistics);

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
          <Statistics statistics={statistics} />
        </div>
      </div>
    </>
  );
}

export default App;
