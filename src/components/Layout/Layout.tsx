import { UserIsLoggedIn } from "src/hooks/authenticationHook";
import MarvelLogo from "src/assets/images/marvel-logo.png";
import ProfilePic from "src/assets/images/profile-picture.png";
import { NavLink, Link } from "react-router-dom";
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
                <NavLink activeClassName="active" to="/personagens">
                  <li>Personagens</li>
                </NavLink>
                <NavLink activeClassName="active" to="/filmes">
                  <li>Filmes</li>
                </NavLink>
                <NavLink activeClassName="active" to="/hqs">
                  <li>HQs</li>
                </NavLink>
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
            <div className="layout-header-hamburger">☰</div>
          </header>
        )}
        {children}
      </div>
      <div
        className="black-effect"
        style={
          logged
            ? {
                background:
                  "linear-gradient(90deg, black 40%, rgba(0, 0, 0, 0.7) 100%)",
              }
            : {}
        }
      />
      <div className="marvel-background" />
    </>
  );
};
