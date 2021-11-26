import React from "react";
import EntryScreen from "./Screens";
import Loading from "./Components/Loading";
import './App.scss';

function App() {
  return (
    <React.Suspense fallback={<Loading isLoading={true} />}>
      {/* <EntryScreen /> */}
      <EntryScreen />
    </React.Suspense>
  );
}

export default App;
