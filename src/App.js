import "./App.css";
import Bottom from "./components/Bottom";
import FormContainer from "./components/form/FormContainer";
import Logo from "./components/Logo";
import Modal from "./components/Modal";
import Top from "./components/Top";

function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Top></Top>
      <FormContainer></FormContainer>
      <Bottom></Bottom>
      <Modal></Modal>
    </div>
  );
}

export default App;
