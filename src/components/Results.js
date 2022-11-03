const Results = () => {
  return (
    <div className="container">
      <div className="form">
        <h1>Results</h1>

        <div className="results">
          <p>Name:</p>
          <p>Email: </p>
          <p>Password: </p>
        </div>

        {/* Bouton Edit */}
        <div className="button-register">
          <button
            onClick={() => {
              console.log("clique");
            }}
            className="button"
          >
            Edit your information
          </button>
        </div>
      </div>

      {/* footer */}
      <footer>
        <p>Made with React at Le Reacteur by Rico</p>
      </footer>
    </div>
  );
};

export default Results;
