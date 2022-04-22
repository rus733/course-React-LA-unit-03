import { useLocation } from 'react-router-dom';

function Category(props) {
  let url = useLocation();
  const data = props.data;
  const categoryItems = data.map((item) => (
    <li key={item.link}>
      <a href={`${url.pathname}${item.link}`}>{item.title}</a>
    </li>
  ));

  return (
    <>
      <h1>Category</h1>
      <a href="/">Назад</a>
      <ul>{categoryItems}</ul>
    </>
  );
}

export default Category;
