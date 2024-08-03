import { TFunction } from "i18next";
import { withTranslation } from "react-i18next";

interface AppProps {
  t: TFunction;
}

const App = ({ t }: AppProps) => {
  return <h1 className="p-4 text-3xl font-bold">{t("welcome.message")}</h1>;
};

const TranslatedApp = withTranslation()(App);

export default TranslatedApp;
