import { Outlet, Link, useNavigate, ScrollRestoration } from 'react-router-dom';

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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/over'>Over ons</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <button onClick={handleGoHome}>Go home!</button>
      <ScrollRestoration />
    </div>
  );
}
