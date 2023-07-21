import React from "react";
import AppRouter from "./App.router.tsx";
import Layout from "./Components/Layout";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
};

export default App;
