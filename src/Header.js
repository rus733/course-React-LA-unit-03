function Header(props) {
  const data = props.data;
  const navItems = data.map((item) => (
    <li>
      <a href={item.link}>{item.title}</a>
    </li>
  ));
  return (
    <nav>
      <ul>{navItems}</ul>
    </nav>
  );
}

export default Header;
