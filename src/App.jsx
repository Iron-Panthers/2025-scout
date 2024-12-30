import Layout from "./hoc/Layout";
import Provider from "./state/state";

function App() {
  return (
    <Provider>
      <Layout>App</Layout>;
    </Provider>
  );
}

export default App;
