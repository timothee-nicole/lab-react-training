import React from 'react';
import './App.css';
import Greetings from "./components/greeting.jsx"
import Random from './components/Random.jsx'
import BoxColor from './components/BoxColor.jsx'
import CreditCard from './components/CreditCard.jsx'
import Rating from './components/Rating.jsx'
import DriverCard from './components/DriverCard.jsx'
import LikeButton from './components/LikeButton.jsx'
import ClickablePicture from './components/clickablePicture.jsx';
import Dice from './components/Dice.jsx'
import Carousel from './components/Carousel';

function IdCard(props) {
  const newHeight = props.height/100
  return (
    <div class="id-card">
      <section><img src={props.picture} alt="IDpicture"/></section>
      <section>
    <p>First name: {props.firstName}</p>
    <p>Last name: {props.lastName}</p>
    <p>Gender: {props.gender}</p>
    <p>Height: {newHeight} m</p>
    <p>Birth: {props.birth.toString()}</p></section>

    </div>
  )
}



function App() {
  return (
    <React.Fragment>
    <h1>Id Cards</h1>
    {/* Iteration 1 */}
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

<h1>Greetings</h1>
 {/* Iteration 2 */}
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

<h1>Random Number</h1>
{/* Iteration 3 */}

<Random min={1} max={6}/>
<Random min={1} max={100}/>

<h1>Color boxed</h1>
{/* Iteration 4 */}

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

<h1>Credit Card</h1>
{/* Iteration 5 */}

<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" />

<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222" />

<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" />


<h1>Ratings</h1>
  {/* Iteration 6 */}

<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>

{/* Iteration 7 */}
<h1>Driver Cards</h1>
<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} />
<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}/>

<h1>Like Buttons</h1>
{/* Iteration 8 */}

<LikeButton /> <LikeButton />

{/* Iteration 9 */}

<h1>Clickable Picture</h1>
<ClickablePicture
  img='/img/persons/maxence.png'
  imgClicked='/img/persons/maxence-glasses.png'
/>

 {/* Iteration 10 */}

<h1>Dice</h1>

<Dice />


{/* Iteration 11 */}
<h1>Carousel</h1>
<Carousel
  imgs={[
    'https://www.piecemaitresse.fr/img/cms/Guide/Malachite/Malachite-brute.jpg',
    'https://static.wixstatic.com/media/abfc15_2ee2d19b7f7146c8a3854f3866a2d518~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    'https://lh3.googleusercontent.com/proxy/-F60jdeV3PLhqnT7UFf4QnYyZl0u6n3b-OqcWX2w9xKIpxvKA2kOScDh9CV8-O9ZaWlMLKX8OSgem24ARNesDqAFT1gspqNuegrJWfAXlWiRhN_RojrnmGsEHkm3gQ8',
    'https://www.rubisnaturels.com/Files/122565/Img/22/Tourmaline-Melon-d-Eau-2-45-CTS-Brute-10-0-x-9-2-x-5-8-mm-Rose-et-Vert-Madag.jpg'
  ]}
/>

</React.Fragment>
  );
}

export default App;
