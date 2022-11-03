import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App(props) {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== password2) {
      setErrorMessage(`Les mots de passe ne sont pas identiques`);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Create account</h1>

        {/* formulaire */}
        <div>
          <Form
            text={text}
            setText={setText}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            password2={password2}
            setPassword2={setPassword2}
          />
        </div>

        {/* Bouton Register */}
        <div onSubmit={handleSubmit} className="button-register">
          <button
            onClick={() => {
              console.log("clique");
            }}
            className="button"
          >
            Register
          </button>
        </div>
      </div>

      {/* footer */}
      <footer>
        <p>Made with React at Le Reacteur by Rico</p>
      </footer>
    </div>
  );
}

export default App;
