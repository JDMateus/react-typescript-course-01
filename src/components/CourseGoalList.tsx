import CourseGoal from './CourseGoal'; // this is a component

import { type CourseGoal as CGoal } from '../App'; // this is a type

// both have the sanme name so to avoid confusion in the code or errors we change the name of the type

import InfoBox from './InfoBox';
// import { ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>You have no course goals yet. Start adding some1</InfoBox>
    );
  }

  // let WarningBox: ReactNode;

  // if (goals.length >= 4) {
  //   WarningBox = (
  //     <InfoBox mode='warning' severity='medium'>
  //       You're collecting a lot of goals, Don't put too much on your plate!
  //     </InfoBox>
  //   );
  // }

  const WarningBox = goals.length >= 4 && (
    <InfoBox mode='warning' severity='medium'>
      You're collecting a lot of goals, Don't put too much on your plate!
    </InfoBox>
  );

  return (
    <>
      {WarningBox}
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
