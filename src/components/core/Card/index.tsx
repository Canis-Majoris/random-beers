import { ReactNode, ComponentProps } from 'react';
import './index.scss';

export interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
}

const Card = ({ children, className, ...rest }: CardProps) => (
  <div className={`card ${className}`} {...rest}>
    {children}
  </div>
);

export default Card;
