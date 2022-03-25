import { useEffect } from "react";
import { connect } from "react-redux";
import App from "../App";

function Logout(props) {
  useEffect(() => {
    localStorage.removeItem("jsonwebtoken");
    localStorage.removeItem("username");
    props.onLogOut();
    console.log("LOGGING OUT");
  });

  return (
    <div>
      <App />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch({ type: "ON_AUTH", payload: null }),
  };
};

export default connect(null, mapDispatchToProps)(Logout);