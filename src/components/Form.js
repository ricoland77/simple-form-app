const Form = (props) => {
  const { text, setText } = props;
  const { email, setEmail } = props;
  const { password, setPassword } = props;
  const { password2, setPassword2 } = props;

  return (
    <form>
      <p>Name</p>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
        type="text"
        placeholder="Jean Dupont"
        value={text}
        name="text"
      />

      <p>Email</p>
      <input
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="email"
        placeholder="Jeandupont@lereacteur.io"
        value={email}
        name="email"
      />

      <p>Password</p>
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        type="password"
        placeholder="JHrETOPIzzsdEE"
        value={password}
        name="password"
      />

      <p>Confirm your password</p>
      <input
        onChange={(event) => {
          setPassword2(event.target.value);
        }}
        type="password"
        placeholder="JHrETOPIzzsdEE"
        value={password2}
        name="password2"
      />
    </form>
  );
};
export default Form;
