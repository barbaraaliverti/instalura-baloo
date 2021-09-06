/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import Text from '../src/components/foundation/Text';
import Grid from '../src/components/foundation/Layout/Grid';
import WebsitePageWrapper, { WebsitePageContext } from '../src/components/Wrappers/WebsitePageWrapper/WebsitePageWrapper';
import Button from '../src/components/commons/Button';
import Box from '../src/components/foundation/Layout/Box';

const HomeScreen = () => {
  const webpagePageContext = useContext(WebsitePageContext);

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
    >
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >

        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                webpagePageContext.toggleModalCadastro();
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              alt="Imagens de celular com páginas internas do aplicativo Instalura mostrando o perfil do ator Nicolas Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
};

export default function Home() {
  return (
    <WebsitePageWrapper
      seoProps={{
        headTitle: 'Home',
      }}
      pageBoxProps={{
        backgroundImage: 'url(/images/bubbles.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
      }}
    >
      <HomeScreen />
    </WebsitePageWrapper>
  );
}
