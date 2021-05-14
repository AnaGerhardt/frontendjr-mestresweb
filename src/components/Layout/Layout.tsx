import { UserIsLoggedIn } from "src/hooks/authenticationHook";
import MarvelLogo from "src/assets/images/marvel-logo.png";
import ProfilePic from "src/assets/images/profile-picture.png";
import { Link } from "react-router-dom";
import { useAppDispatch } from "src/redux/hooks";
import { Auth, auth } from "src/redux/auth.slice";

import "./Layout.scss";

interface IProps {
  children: JSX.Element;
}

export const Layout = ({ children }: IProps) => {
  const logged = UserIsLoggedIn();
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="layout">
        {logged && (
          <header className="layout-header">
            <div className="layout-header-logo">
              <img src={MarvelLogo} alt="" />
            </div>
            <nav>
              <ul className="layout-header-pages">
                <Link to="/personagens">
                  <li>Personagens</li>
                </Link>
                <Link to="/filmes">
                  <li>Filmes</li>
                </Link>
                <Link to="/hqs">
                  <li>HQs</li>
                </Link>
              </ul>
            </nav>
            <div className="layout-header-auth">
              <img src={ProfilePic} alt="" />
              <Link to="/">
                <span
                  onClick={() => dispatch(auth({ token: undefined } as Auth))}
                >
                  Sair
                </span>
              </Link>
            </div>
          </header>
        )}
        {children}
      </div>
      <div className="black-effect" />
      <div className="marvel-background" />
    </>
  );
};
