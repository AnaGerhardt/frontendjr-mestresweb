import MarvelLogo from "src/assets/images/marvel-logo.png";
import { TextInput, MainButton } from "src/assets/css/styled-components";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "src/redux/hooks";
import { Auth, auth } from "src/redux/auth.slice";
import "./Login.scss";

export const Login = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(auth({ token: "token" } as Auth));
    history.push("/personagens");
  };
  return (
    <div className="login">
      <img src={MarvelLogo} alt="" />
      <h2>Bem-vindo(a) de volta!</h2>
      <p>Acesse sua conta:</p>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <TextInput type="text" placeholder="Usuário" />
        <TextInput type="text" placeholder="Senha" />
        <div className="login-form-options">
          <div>
            <input type="checkbox" />
            <span className="login-form-options-salvar">Salvar login</span>
          </div>
          <span className="login-form-options-esqueci">Esqueci a senha</span>
        </div>
        <MainButton className="bg-main-button" type="submit">
          Entrar
        </MainButton>
        <span className="login-form-cadastre">
          Ainda não tem o login? <span>Cadastre-se</span>
        </span>
      </form>
    </div>
  );
};
