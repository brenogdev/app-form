import React from "react";

import { Controller, FieldError } from "react-hook-form";
import { Input, InputProps } from "../Input";

import * as Styled from "./styles";

type Props = InputProps & {
  control: any;
  name: string;
  error?: FieldError;
};

export function InputControlled({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Styled.Error>{error.message}</Styled.Error>}
    </>
  );
}
