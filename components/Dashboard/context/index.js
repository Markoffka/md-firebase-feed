import { createContext, useContext } from 'react';
const CTX = createContext({});
function ContextProvider({ children, value }) {
  return <CTX.Provider value={value}>{children}</CTX.Provider>;
}
function useContx() {
  const ctx = useContext(CTX);
  if (!ctx) throw new Error('useContx must use in ContextProvider');
  return ctx;
}
export { ContextProvider, useContx };
