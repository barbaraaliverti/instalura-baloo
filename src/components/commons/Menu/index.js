import React from 'react';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';
import { MenuWrapper } from './styles/MenuWrapper';

const links = [
  {
    text: 'Home',
    url: '/'
  },
  {
    text: 'Perguntas frequentes',
    url: '/faq'
  },
  {
    text: 'Sobre',
    url: '/sobre'
  }
]


export default function Menu() {
  return(
    <MenuWrapper>
      <MenuWrapper.LeftSide><Logo /></MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>{links.map((link)=> {
        return(
          <li key={link.url}>
            <Text tag='a' variant='smallestException' href={link.url}>
              {link.text}
            </Text>          
          </li>
        )
      })}</MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant='secondary.main'>Entrar</Button>
        <Button variant='primary.main'>Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )  
};