import React from 'react';

// import { Button } from './Button';
import './footer.css';

type User = {
  name: string;
};

interface FooterProps {
  user?: User;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Footer = ({ user, backgroundColor, ...props }: FooterProps) => (
  <footer style={{display: 'flex', justifyContent: 'center'}} {...props}>
   <div className='storybook-footer'>
    <div>
        {user && <>©<b>{user.name}</b></>}
    </div>
   </div>
   <style jsx>{`
        footer {
            background-color: ${backgroundColor}
        }
    `}</style>
  </footer>
);
