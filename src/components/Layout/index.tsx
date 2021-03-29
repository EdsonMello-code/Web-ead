import React, { ReactNode } from 'react';

import imageIcon from '../../assets/images/icon.svg';
import { Container, Childrens } from './styles';
 
interface ILayout {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<ILayout> = ({ children, title }) => {
  return <Container>
    <header>
      <img src={imageIcon} alt="Icone Ead"/>
    </header>

      <h1>{title}</h1>

      <Childrens>
        {children}
      </Childrens>
  </Container>;
}

export default Layout;