import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Toaster } from "../../components/toaster";
import { loginService } from "../../services/login.service";

const LoginFeature = (props) => {
  const { form, submit } = props.classes;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    loginService(username, password)
      .then((res) => {
        res?.isLogin && localStorage.setItem("isLoggedIn", JSON.stringify(res));
      })
      .catch((err) => console.log(err))
      .finally(() => window.location.reload());
  };

  return (
    <>
      <form className={form} onSubmit={handleSubmit} noValidate>
        <TextField
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          variant="outlined"
          value={password}
          margin="normal"
          required
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={submit}
        >
          Sign In
        </Button>
        {/* <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid> */}
      </form>
      {props.isError && (
        <Toaster
          message={"Invalid username or password. Please try again"}
          type="error"
        />
      )}
    </>
  );
};
export default LoginFeature;
