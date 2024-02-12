import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import { ConfigProvider } from "antd";
import { colors, fonts } from "./styles/stylesVariables";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.accent,
          colorBgContainer: colors.background.primary,
          colorText: colors.font.primary,
          fontFamily: fonts.Cabin,
          fontSize: "15px",
        },
      }}
    >
      <GlobalStyles />
      <Routes />
    </ConfigProvider>
  );
}

export default App;
