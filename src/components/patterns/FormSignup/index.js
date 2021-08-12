import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import Button from '../../commons/Button';
import Box from '../../foundation/Layout/Box';
import Grid from '../../foundation/Layout/Grid';
import Text from '../../foundation/Text';
import TextField from '../TextField';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const FormContent = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates);

  const [userInfo, setUserInfo] = useState({
    name: '',
    username: '',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  };

  const isFormValid = userInfo.name.length === 0 || userInfo.username.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmitted(true);

        const userDTO = {
          username: userInfo.username,
          name: userInfo.name,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((resServidor) => {
            if (resServidor.ok) {
              return resServidor.json(); // resposta convertida em obj
            }

            throw new Error('Não foi possível fazer o cadastro :(');
          })
          .then((resConvertidaEmObj) => {
            setSubmissionStatus(formStates.DONE);
            return resConvertidaEmObj;
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            return error;
          }); // pega o erro de qualquer das etapas anteriores
      }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormValid}
        fullWidth
      >
        Cadastrar
      </Button>

      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >

        {isFormSubmitted && submissionStatus === 'DONE' && (
          <>
            <Lottie
              width="100px"
              height="100px"
              className="lottie-container basic"
              config={{ animationData: successAnimation, loop: false, autoplay: true }}
            />
            <p>Cadastro realizado com sucesso!</p>
          </>
        )}

        {isFormSubmitted && submissionStatus === 'ERROR' && (
          <>
            <Lottie
              width="100px"
              height="100px"
              className="lottie-container basic"
              config={{ animationData: errorAnimation, loop: false, autoplay: true }}
            />
            <p>Ops! Algo deu errado!</p>
          </>
        )}

      </Box>

    </form>
  );
};

const FormSignup = (propsModal) => (
  <Grid.Row
    marginLeft={0}
    marginRight={0}
    flex={1}
    justifyContent="flex-end"
  >
    <Grid.Col
      display="flex"
      paddingRight={{ md: '0' }}
      flex={1}
      value={{ xs: 12, md: 5, lg: 4 }}
    >
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        padding={{
          xs: '16px',
          md: '85px',
        }}
        backgroundColor="white"
              // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsModal}
      >
        <FormContent />
      </Box>
    </Grid.Col>
  </Grid.Row>
);

export default FormSignup;
