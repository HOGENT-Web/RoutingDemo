import { LoremIpsum } from 'react-lorem-ipsum';

export const Home = () => (
  <div>
    <h1>Welkom!</h1>
    <p>Hier is nog niet zoveel te zien.</p>
  </div>
);

export const About = () => (
  <div>
    <h1>Over ons</h1>
    <LoremIpsum p={2} />
  </div>
);

export const Contact = () => (
  <div>
    <h1>Contact</h1>
    <LoremIpsum p={2} />
  </div>
);

export const NotFound = () => {
  return (
    <div>
      <h1>Pagina niet gevonden</h1>
      <p>
        Er is geen pagina met op deze url, probeer iets anders.
      </p>
    </div>
  );
};

// export const Services = () => (
//   <div>
//     <h1>Our services</h1>
//     <LoremIpsum p={2} />
//   </div>
// );

// export const History = () => (
//   <div>
//     <h1>History</h1>
//     <LoremIpsum p={2} />
//   </div>
// );

// export const Location = () => (
//   <div>
//     <h1>Location</h1>
//     <LoremIpsum p={2} />
//   </div>
// );

// const products = [{
//   id: 1,
//   name: 'Confituur',
//   price: 2.50
// }, {
//   id: 2,
//   name: 'Choco',
//   price: 3.50
// }, {
//   id: 3,
//   name: 'Coco-cola',
//   price: 3.20
// }, {
//   id: 4,
//   name: 'Fanta',
//   price: 3.00
// }, {
//   id: 5,
//   name: 'Sprite',
//   price: 2.90
// }];

// export const Products = () => (
//   <div>
//     <ul>
//       {products.map(({ id, name }) => (
//         <li key={id}>
//           {name}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
