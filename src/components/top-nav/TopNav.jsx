import "./TopNav.css";
const TopNav = () => {
  return (
    <nav className='top-nav'>
      <a href='#'>No mask</a>
      <ul className='top-nav__list'>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>News</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
