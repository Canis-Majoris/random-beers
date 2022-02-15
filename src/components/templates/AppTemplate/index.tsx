import Footer from '@Components/core/Footer';
import Header from '@Components/core/Header';
import AppTemplateProps from './types';
import './index.scss'

const AppTemplate = ({ children }: AppTemplateProps) => {
  return (
    <div className='app-template container'>
      <Header />
      <main className='app-template-content'>{children}</main>
      <Footer />
    </div>
  );
};

export default AppTemplate;
