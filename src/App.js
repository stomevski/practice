import Authenticate from "./components/Authenticate/Authenticate";
import AuthStore from "./store/AuthStore";


const App = () => {
  return (
    <AuthStore>

      <Authenticate />

    </AuthStore>
  );
}

export default App;
