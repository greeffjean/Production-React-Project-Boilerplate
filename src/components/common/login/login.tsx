import React, { FunctionComponent } from "react";

export type TLoginProps = {
  greeting: string;
};

const LoginComponent: FunctionComponent<TLoginProps> = ({ greeting }) => {
  return (
    <>
      <h1 role="welcomeHeading">This is the Login Page!</h1>
      <span role="userGreeting">{greeting}</span>
    </>
  );
};

export default LoginComponent;
