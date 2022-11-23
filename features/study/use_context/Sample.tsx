import { FC, useContext } from 'react';
import { XxxContext, YyyContextValue } from './hooks/contexts';

type Props = {
  samplePropData?: string;
};

const Sample: FC<Props> = ({ samplePropData }) => {
  const xxxContextValue = useContext(XxxContext);
  const yyyContextValue = useContext(YyyContextValue);
  return (
    <div style={{ padding: '12px', backgroundColor: '#eee' }}>
      <h1>Sample Component</h1>
      <p>samplePropData: {samplePropData}</p>

      <h2>xxxContext</h2>
      <p>xxxContextValue.x: {xxxContextValue.x}</p>
      <h2>yyyContext</h2>
      <p>yyyContextValue.y: {yyyContextValue.y}</p>
    </div>
  );
};

export default Sample;
