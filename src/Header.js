function Header(props) {
  const data = props.data;
  const navItems = data.map((item) => (
    <li key={item.link}>
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
