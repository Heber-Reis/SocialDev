import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Link from 'next/link';
import { joiResolver } from '@hookform/resolvers/joi'

import ImageWithSpace from '../src/components/layout/ImageWIthSpace';
import H1 from '../src/components/tipographfy/H1';
import H4 from '../src/components/tipographfy/H4';
import H2 from '../src/components/tipographfy/H2';
import Button from '../src/components/inputs/Button';
import Input from '../src/components/inputs/Input';
import { signupSchema } from '../modules/user/user.schema';
import { object } from 'joi';

const FormContainer = styled.div`
  margin-top: 40px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`
const Text = styled.p`
  text-align: center;
`

function SignupPage () {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(signupSchema)
  })

  const handleForm = (data) => {
    console.log(data)
  }

  return(
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev, está aqui!</H4>
      
      <FormContainer>
        <H2>Crie sua conta!</H2>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Input label="Nome" name="firstName" control={control} />
          <Input label="Sobrenome" name="lastName" control={control} />
          <Input label="User" name="user" control={control} />
          <Input label="Digite seu email" type="email" name="email" control={control} />
          <Input label="Sua senha" type="password" name="password" control={control} />
          <Button type={'submit'} disabled={Object.keys(errors).length > 0}>Entrar</Button>
        </Form>
      </FormContainer>
      <Text>
        Já possui uma conta? <Link href='/login'>Faça seu login!</Link>
      </Text>
    </ImageWithSpace>
  )
}

export default SignupPage;