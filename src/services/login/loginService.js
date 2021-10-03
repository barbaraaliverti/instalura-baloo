import { setCookie, destroyCookie } from 'nookies';
import isStagingEnv from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}

const BASE_URL = isStagingEnv
  // exemplo backend de STAGING
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // backend de PROD
  : 'https://instalura-api-git-master-omariosouto.vercel.app';

const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((respostaConvertida) => {
        // salvar token
        const { token } = respostaConvertida.data;
        const DAY_IN_SECONDS = 86400;

        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return { token };

        // escrever testes: login.spec
      });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};

export default loginService;
