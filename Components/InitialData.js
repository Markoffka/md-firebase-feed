import { createContext, useContext } from 'react';

const InitialData = [];
const DashboardContext = createContext(InitialData);

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (ctx == null) throw new Error('No Context');
  return ctx;
}
export function DashboardProvider({ value, children }) {
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
