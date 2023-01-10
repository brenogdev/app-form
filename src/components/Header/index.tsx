import React from 'react';
import * as Styled from './styles';

export function Header() {
  return (
    <Styled.Container>
      <Styled.Title>
        Crie sua{'\n'}conta
      </Styled.Title>

      <Styled.Subtitle>
        Faça seu cadastro de{'\n'}
        forma rápida e fácil
      </Styled.Subtitle>
    </Styled.Container>
  )
}