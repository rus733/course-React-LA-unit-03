import { useLocation } from 'react-router-dom';

function Category(props) {
  let url = useLocation();
  const data = props.data;
  const categoryItems = data.map((item) => (
    <li>
      <a href={`${url.pathname}${item.link}`}>{item.title}</a>
    </li>
  ));

  return (
    <>
      <h1>Category</h1>
      <a href="/">Назад</a>
      <ul>
        {categoryItems}
        {/* <li>
          <a href={`${url.pathname}/notebook`}>Ноутбуки</a>
        </li>
        <li>
          <a href={`${url.pathname}/monitor`}>Мониторы</a>
        </li>
        <li>
          <a href={`${url.pathname}/cellphone`}>Мобильные телефоны</a>
        </li> */}
      </ul>
    </>
  );
}

export default Category;
