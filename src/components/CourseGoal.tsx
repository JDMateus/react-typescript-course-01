// There are 3 ways to type the props + children

// 1) Define the interface/Type alias and add the children typed as ReactNode
import { type ReactNode } from 'react';

interface CourseGoalProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
}

// 2) Use the generic PropsWithChildren<PropsType>, passing the props type
// import { type PropsWithChildren } from 'react';

// type CourseGoalProps = PropsWithChildren<{
//   id: number;
//   title: string;
//   onDelete: (id: number) => void;
// }>;

export default function CourseGoal({ title, id, onDelete, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// 3) Use the generic FC (Functional component) and pass the props type
// import { type PropsWithChildren, type FC } from 'react';

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// export const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// this file teach 3 different ways to type the children prop in a component

// 1 ) here you only import ReactNode type

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

// 2) here you import PropsWithChildren type

// type CourseGoalProps = PropsWithChildren<{
//   title: string;
// }>;

// 3) here you import PropsWithChildren type and FC type

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {}
