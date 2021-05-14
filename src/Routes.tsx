import { Switch, Route } from "react-router-dom";
import { Login, Personagens } from "src/pages";
import { Layout } from "src/components";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/personagens" component={Personagens} />
      </Switch>
    </Layout>
  );
};

export default Routes;
