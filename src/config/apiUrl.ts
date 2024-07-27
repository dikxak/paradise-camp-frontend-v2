type EnvironmentVariables = {
  VITE_APP_DEV_API_URL: string;
  VITE_APP_PROD_API_URL: string;
  VITE_APP_ENV: string;
};

const getApiUrl = (): string => {
  let baseUrl: string;

  const {
    VITE_APP_DEV_API_URL,
    VITE_APP_PROD_API_URL,
    VITE_APP_ENV,
  }: EnvironmentVariables = import.meta.env;

  switch (VITE_APP_ENV) {
    case "development":
      baseUrl = VITE_APP_DEV_API_URL;
      break;

    case "production":
      baseUrl = VITE_APP_PROD_API_URL;
      break;

    default:
      baseUrl = VITE_APP_PROD_API_URL;
      break;
  }

  return baseUrl;
};

export default getApiUrl;
