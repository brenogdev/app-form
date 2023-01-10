import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as Styled from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Styled.Container {...rest}>
      <Styled.Title>
        {title}
      </Styled.Title>
    </Styled.Container>
  );
}