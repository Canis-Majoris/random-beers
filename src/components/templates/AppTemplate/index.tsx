import { FC, ReactNode } from 'react';
import { Header, Footer } from '@Components/core';
import './index.scss';

export interface AppTemplateProps {
  children: ReactNode;
}

const AppTemplate: FC<AppTemplateProps> = ({ children }) => {
  return (
    <div className='app-template container'>
      <Header />
      <main className='app-template-content'>{children}</main>
      <Footer />
    </div>
  );
};

export default AppTemplate;
