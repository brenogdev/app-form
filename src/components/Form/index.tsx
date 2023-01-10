import React, { useState } from "react";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { InputControlled } from "../InputControlled";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Styled from "./styles";
import { registerSchema } from "../../schemas/registerSchema";

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });

  function handleUserRegister(data: FormData) {
    console.log(data);
  }

  return (
    <Styled.Container>
      <InputControlled
        name="name"
        control={control}
        icon="user"
        placeholder="Nome"
        error={errors.name}
      />
      <InputControlled
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />
      <InputControlled
        name="password"
        control={control}
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        error={errors.password}
      />
      <InputControlled
        name="password_confirmation"
        control={control}
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
        error={errors.password_confirmation}
      />

      <Button title="Cadastrar" onPress={handleSubmit(handleUserRegister)} />
    </Styled.Container>
  );
}
