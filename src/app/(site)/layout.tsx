import React from 'react';

export default function HomePageLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {/* <Header /> */}
      {children}
    </main>
  );
};