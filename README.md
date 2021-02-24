# Goofy-React-Learning

In this repo we will be learning react, we will be builing projects etc.

---

---

| Module A         | Module B           | Module C                 |
| ---------------- | ------------------ | ------------------------ |
| React Essentials | Interface in React | Hosting Fullstack        |
| React SPA's      | React Ecosystem    | Working with APIs, Hooks |

# Module B: Interface in React

We will be working in virtualenvironment. quicktips: 'pip3 install virtualenv'. 'source env/bin/activate' to start. 'deactivate' to stop.
mkdir my_proj && cd my_proj (reactinterface in our case).

**Requirements:** check node, git, npm installed or not. If not install.

```js script
cd ~/Desktop
$ npx create-react-app reactinterface
$ cd reactinterface
$ npm start // to start local server
// Download React Developer Tools from chrome store.
// https://lnkd.in/gKmxaj7
```

```js script
// Open in VS Code and files should be: node_modules, public, src, .gitignore, {}package-lock,json, {}package.json and README.md respectively.
// install dependencies now
$ npm i --save bootstrap react-icons lodash jquery popper.js moment react-moment
```

this is the interface we built, Wisdom Pet Medicine is where pet's are treated.

<!-- ![interfaceicon](icon_01.jpg) -->

![interfaceicon](https://github.com/madhav06/projectImages/blob/master/icon_01.png)

We can add appointments, seach appointments by creating subcomponents:
we will fetch data from **'data.json'** file, screenshot is below.

![interfaceicon](https://github.com/madhav06/projectImages/blob/master/icon_03.png)

Let's create first AddAppointments.js

```js script
//src --> components --> AddAppointments.js

AddAppointments.js;

import React, { Component } from "react";
class AddAppointments extends Component {
  render() {
    return <div>Add -- Appointments </div>;
  }
}
export default AddAppointments;

// Rest of code is in src/components/AddAppointments.js
```

**Screenshot is below:**
![interfaceicon](https://github.com/madhav06/projectImages/blob/master/icon_02.png)

Let's add a new appointment now!
Feed the record for **"Sniggles"** and _boom!!_ we see in React-Developers-Tools its working like magic.
_This is where we feel how responsive and powerful react is!_

```js script
// To know more, visit: src/components/AddAppointments.js
```

**Screenshot is below:**
![interfaceicon](https://github.com/madhav06/projectImages/blob/master/icon_05.png)

As we can add record for new appointments, similarly in this dynamic responsive interface we can delete the booked appointments.

**Screenshot is below:**
![interfaceicon](https://github.com/madhav06/projectImages/blob/master/icon_04.png)

```js script
// End of Module B
```

# Module A: React Essentials

#### Working with useState:

```js script
import React, { useState } from "react";
import "./App.css";

function App() {
    const [emotion, setEmotion] = useState("happy");

    return (
        <div>
          <h1> Current emotion is {emotion}. </h1>
          <button onClick={() => setEmotion("happy")}>
          Happy
          </button>
          <button onClick={() => setEmotion("frustated")}>
          Frustate
          </button>
          <button onClick={() => setEmotion("enthusiastic")}>
          Enthuse
          </button>
        <div/>
    );
}

```

#### Displaying images with React:

Here is how we can work with images
step 1 - put all images in one format in src dir
step 2 - import images properly in App.js file
step 3 - add images in project using JSX Code

```js script
import restaurant from "./tasty_biryani.png";
import egg from "./egg_biryani.jpeg";
import chicken from "./chicken_biryani.jpeg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen </h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} biryani in varanasi city.</p>
      <img
        src={restaurant}
        height={200}
        alt="tasty handi chicken biryani at a restaurant table"
      />
      <img
        src={egg}
        height={200}
        alt="egg and lamb biryani with roasted lamb and half baked rice"
      />
      <img src={chicken} height={200} alt="chicken hot and spicy biryani" />
    </section>
  );
}
```

#### Working with useEffect:

```js script
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <div>
      <h1>
        Current emotion is {emotion} and {secondary}.{" "}
      </h1>
      <button onClick={() => setEmotion("happy")}> Make Happy</button>
      <button onCLick={() => setSecondary("crabby")}> Make Crabby</button>
      <button onClick={() => setEmotion("frustated")}> Frustate </button>
    </div>
  );
}
```

#### Fetching data with Hooks:

```js script
import React, { useState, useEffect } from "react";
import "./App.css";

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }

  return <div>No User Available </div>;
}
```
