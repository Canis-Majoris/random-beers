import { ReactNode, ComponentProps, FC } from 'react';
import './index.scss';

export interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children, className, ...rest }) => (
  <div className={`card ${className}`} {...rest}>
    {children}
  </div>
);

export default Card;
