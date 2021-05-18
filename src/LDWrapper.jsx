import { withLDProvider } from "launchdarkly-react-client-sdk";
import App from "./App";

export default withLDProvider({
  clientSideID: import.meta.env.LD_CLIENT_KEY,
  user: {
    key: "user_key",
    name: "User Name",
    email: "User@email.com",
  },
})(App);
