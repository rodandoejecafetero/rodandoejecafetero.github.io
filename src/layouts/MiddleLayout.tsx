import { ReactNode } from 'react';

export default function MiddleLayout({ children, color = 'yellow' }: { children: ReactNode, color?: string }) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '100vw',
          minHeight: '100vh',
        }}
        className={`bg-${color}`}
      >
        {children}
      </div>
    );
};