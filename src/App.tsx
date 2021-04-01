import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "hooks/auth";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      </AuthProvider>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </BrowserRouter>
  );
};