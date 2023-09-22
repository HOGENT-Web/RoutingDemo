import { LoremIpsum } from 'react-lorem-ipsum';
import { Link, useLocation, Outlet, useParams } from 'react-router-dom';

export const Home = () => (
  <div>
    <h1>Welkom!</h1>
    <p>Kies één van de volgende links:</p>
    <ul>
      <li>
        <Link to='/over'>Over ons</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  </div>
);

export const About = () => (
  <div>
    <h1>Over ons</h1>
    <LoremIpsum p={2} />

    <ul>
      <li>
        <Link to='/over/services'>Onze diensten</Link>
      </li>
      <li>
        <Link to='/over/history'>Geschiedenis</Link>
      </li>
      <li>
        <Link to='/over/location'>Locatie</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export const Contact = () => (
  <div>
    <h1>Contact</h1>
    <LoremIpsum p={2} />
  </div>
);

export const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>Pagina niet gevonden</h1>
      <p>Er is geen pagina met als url {pathname}, probeer iets anders.</p>
    </div>
  );
};

export const Services = () => (
  <div>
    <h1>Our services</h1>
    <LoremIpsum p={2} />
  </div>
);

export const History = () => (
  <div>
    <h1>History</h1>
    <LoremIpsum p={2} />
  </div>
);

export const Location = () => (
  <div>
    <h1>Location</h1>
    <LoremIpsum p={2} />
  </div>
);

const products = [
  {
    id: 1,
    name: 'Confituur',
    price: 2.5,
  },
  {
    id: 2,
    name: 'Choco',
    price: 3.5,
  },
  {
    id: 3,
    name: 'Coco-cola',
    price: 3.2,
  },
  {
    id: 4,
    name: 'Fanta',
    price: 3.0,
  },
  {
    id: 5,
    name: 'Sprite',
    price: 2.9,
  },
];

export const Products = () => (
  <div>
    <ul>
      {products.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/products/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Product = () => {
  const { id } = useParams();
  const idAsNumber = Number(id);

  const product = products.find((p) => p.id === idAsNumber);

  if (!product) {
    return (
      <div>
        <h1>Product niet gevonden</h1>
        <p>Er is geen product met id {id}.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        <b>Price:</b> &euro; {product.price}
      </p>
    </div>
  );
};
