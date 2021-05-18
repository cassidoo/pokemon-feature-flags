import React from "react";
import Pokemon from "./Pokemon";
import { withLDProvider } from "launchdarkly-react-client-sdk";

function App() {
  return (
    <>
      <Pokemon />
    </>
  );
}

export default withLDProvider({
  clientSideID: import.meta.env
    .VITE_LD_CLIENT_KEY,
  user: {
    key: "user_key",
    name: "User name",
    email: "User@email.com",
  },
})(App);
