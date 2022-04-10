import React, { useState, useEffect} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import App1 from "./src_yt/components/App1";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];


const App = () => {
  const [selected, setSelected] = useState(options[0]);
  useEffect(()=>{
    console.log('Styling yet to be done')
  },[])
  return (
    <div>
      <Header />
      <Route path="/list">
        <Accordion items={items} />
      </Route>
      <Route path="/">
        <Search />
      </Route>
      {/* <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route> */}
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path='/youtube'>
        <App1/>
      </Route>
    </div>
  );
};
export default App;
