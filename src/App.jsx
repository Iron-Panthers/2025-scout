import CurrentMode from "./components/CurrentMode";
import Layout from "./hoc/Layout";
import Provider from "./state/state";

function App() {
  return (
    <Provider>
      <Layout>
        <CurrentMode />
      </Layout>
    </Provider>
  );
}

export default App;
