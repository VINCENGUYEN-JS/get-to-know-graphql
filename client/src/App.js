import { Layout } from "antd";
import "./App.css";

import Forms from "./components/Forms.jsx";
import BookList from "./components/BookList.jsx";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Books</Header>
        <Content>
          <Forms />
          <BookList />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
