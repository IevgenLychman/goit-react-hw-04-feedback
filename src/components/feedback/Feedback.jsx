import { useState } from 'react';
import { Statistics } from 'components/statistic/Statistics';
import { FeedbackOptions } from 'components/feedbackOption/FeedbackOptions';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';

export function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sum = good + bad + neutral;

  const onAddFeedback = item => {
    switch (item) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    if (!sum) {
      return 0;
    }
    return Math.round((good * 100) / sum);
  };

  return (
    <>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          items={['good', 'neutral', 'bad']}
          onLeaveFeedback={onAddFeedback}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {sum === 0 ? (
          'There is no feedback'
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={sum}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </SectionTitle>
    </>
  );
}
