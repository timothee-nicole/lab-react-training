import React from 'react';
import './App.css';
import Greetings from "./components/greeting.jsx"

function IdCard(props) {
  return (
    <div>
      <img src={props.picture} alt="IDpicture"/>
    <h4>First name: {props.firstName}</h4>
    <h4>Last name: {props.lastName}</h4>
    <h4>Gender: {props.gender}</h4>
    <h4>Height: {props.height}cm</h4>
    <h4>Birth: {props.birth.toString()}</h4>

    </div>
  )
}



function App() {
  return (
    <React.Fragment>
    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

</React.Fragment>
  );
}

export default App;
