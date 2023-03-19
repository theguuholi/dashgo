import { Input } from "@/components/Form/Input";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
  error: FieldError;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
  password: yup.string().required("Senha obrigatoria"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        background="gray.800"
        borderRadius={8}
        flexDir="column"
        p="8"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isLoading}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
