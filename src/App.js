import Context from "./context";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <Context>
        <Login />
      </Context>
    </div>
  );
}

export default App;
