import { createContext } from 'react';

type XxxContextValue = {
  x: string | null;
};
export const XxxContext = createContext<XxxContextValue>({} as XxxContextValue);

type YyyContextValue = {
  y: string | null;
};
export const YyyContextValue = createContext<YyyContextValue>(
  {} as YyyContextValue
);
