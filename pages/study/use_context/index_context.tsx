import {
  XxxContext,
  YyyContextValue,
} from '../../../features/study/use_context/hooks/contexts';
import { App } from '../../../features/study/use_context/App';

export default function Index() {
  return (
    <>
      <XxxContext.Provider value={{ x: 'Hello' }}>
        <YyyContextValue.Provider value={{ y: 'World' }}>
          <App />
        </YyyContextValue.Provider>
      </XxxContext.Provider>
    </>
  );
}
