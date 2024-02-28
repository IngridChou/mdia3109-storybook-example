import React from 'react';

import { Button } from './Button';
import './card.css';

type User = {
  name: string;
};

interface CardProps {
  user?: User;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Card = ({ user, backgroundColor, onClick, ...props }: CardProps) => (
  <div style={{display: 'flex', justifyContent: 'center'}} {...props}>
   <div className='storybook-card'>
    <div>
        {user && <>©<b>{user.name}</b></>}
    </div>
    <Button size="small" onClick={onClick} label="Button"/>
   </div>
   <style jsx>{`
        div {
            background-color: ${backgroundColor}
        }
    `}</style>
  </div>
);
