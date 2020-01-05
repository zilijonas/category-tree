import React from "react";
import { TreeView } from "./tree/Tree";

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <h1>Almighty tree</h1>
        <br />
        Just enter the name of a child and click enter.
      </div>
      <TreeView />
    </div>
  );
};

export default App;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    marginTop: 50,
    marginLeft: 20
  }
};
