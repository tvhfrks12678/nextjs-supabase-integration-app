import { FC } from 'react';
import Sample from './Sample';

export const App: FC = () => {
  return (
    <div>
      <h1>App</h1>
      <Sample samplePropData="Data passed from parent." />
    </div>
  );
};
