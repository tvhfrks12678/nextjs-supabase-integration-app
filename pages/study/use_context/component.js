import { createContext } from 'react';
import { ComponentA } from '../../../features/study/use_context/ComponentA';
import {
  XxxContext,
  YyyContextValue,
} from '../../../features/study/use_context/hooks/contexts';
import { App } from '../../../features/study/use_context/App';

export const UserCount = createContext();

function Component() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Learn useContext</h1>
      <UserCount.Provider value={100}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
}

export default Component;
