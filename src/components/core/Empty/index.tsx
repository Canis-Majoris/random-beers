import { FC, ReactNode } from 'react';
import './index.scss';

export interface EmptyProps {
  children: ReactNode;
}

const Empty: FC<EmptyProps> = ({ children }) => (
  <div className='empty'>{children}</div>
);

export default Empty;
