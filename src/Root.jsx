import {
  Outlet,
  NavLink,
  useNavigate,
  ScrollRestoration,
} from 'react-router-dom';

export default function Root() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/over'>Over ons</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <button onClick={handleGoHome}>Go home!</button>
      <ScrollRestoration />
    </div>
  );
}
