import "./styles.css";

import CardComp from "./components/CardComp";

function App() {
  return (
    <div className="app">
      <CardComp
        avatarimg="https://via.placeholder.com/50"
        title="Title goes here"
        secondtitle="Secondary Text"
        imageUrl="https://via.placeholder.com/300"
        content="Greyhound divisively hello coldly wonderfully marginally far upon
        excluding."
        buttons={["Action 1 ", "Action 2"]}
        icons={["🩶", "🔗"]}
      />
      <CardComp
        avatarimg="https://via.placeholder.com/50"
        title="Title goes here"
        secondtitle="Secondary Text"
        imageUrl="https://via.placeholder.com/300"
        content="Greyhound divisively hello coldly wonderfully marginally far upon
        excluding."
        buttons={["Action 3 ", "Action 4"]}
        icons={["🩶", "🔗"]}
      />
      <CardComp
        avatarimg="https://via.placeholder.com/50"
        title="Title goes here"
        secondtitle="Secondary Text"
        imageUrl="https://via.placeholder.com/300"
        content="Greyhound divisively hello coldly wonderfully marginally far upon
        excluding."
        buttons={["Action 5 ", "Action 6"]}
        icons={["🩶", "🔗"]}
      />
    </div>
  );
}

export default App;
