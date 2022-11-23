import { UserCount } from '../../../pages/study/use_context/component';
import { useContext } from 'react';

export const ComponentC = () => {
  const count = useContext(UserCount);
  return (
    <>
      <div>
        <p>Component</p>
        <p>{count}</p>
      </div>
    </>
  );
};
