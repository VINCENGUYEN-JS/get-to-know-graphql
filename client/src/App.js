import { Layout } from "antd";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";
import Forms from "./components/Forms.jsx";
import BookList from "./components/BookList.jsx";

const { Header, Content } = Layout;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Layout>
          <Header>Books</Header>
          <Content>
            <Forms />
            <BookList />
          </Content>
        </Layout>
      </div>
    </ApolloProvider>
  );
}

export default App;
