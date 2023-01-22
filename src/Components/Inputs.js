import "./Inputs.css";

function Inputs() {
  return (
    <div className="field">
      <form>
        <div className="username">
          <label>Username  </label>
          <input className="field" type="text" name="username" />
        </div>
        <div className="password">
          <label>Password    </label>
          <input className="field" type="text"  name="password" />
        </div>
      </form>
    </div>
  );
}

export default Inputs;
