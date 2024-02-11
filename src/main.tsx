import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
//client 
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  // in memory cache
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
