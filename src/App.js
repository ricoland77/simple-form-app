import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="form">
        <h1>Create account</h1>
        <div>
          <p>Name</p>
          <form action="">
            <input type="text" placeholder="Jean Dupont" />
            <p>Email</p>
            <input type="text" placeholder="Jeandupont@lereacteur.io" />
            <p>Password</p>
            <input type="password" placeholder="JHrETOPIzzsdEE" />
            <p>Confirm your password</p>
            <input type="password" placeholder="JHrETOPIzzsdEE" />
          </form>
        </div>
        <div>
          <button className="button">Register</button>
        </div>
      </div>
      <footer>
        <p>Made with React at Le Reacteur by Rico</p>
      </footer>
    </div>
  );
}

export default App;
