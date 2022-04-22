import { useParams, Link } from 'react-router-dom';

function Header() {
  const { catDescr } = useParams();
  return (
    <>
      <h1>Category: {catDescr}</h1>
      <Link to="/cat">Назад</Link>
    </>
  );
}

export default Header;
