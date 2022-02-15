import { FC } from 'react';
import './index.scss';

export interface AlertProps {
  variant?: 'error' | 'success' | 'warning' | 'info';
}

const Alert: FC<AlertProps> = ({ children, variant = 'info' }) => (
  <div className={`alert alert-${variant}`}>{children}</div>
);

export default Alert;
