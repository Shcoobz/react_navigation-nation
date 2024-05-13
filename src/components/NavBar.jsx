function Navbar() {
  const navItems = [
    { id: 'nav-1', text: 'Home', link: '#home' },
    { id: 'nav-2', text: 'About', link: '#about' },
    { id: 'nav-3', text: 'Skills', link: '#skills' },
    { id: 'nav-4', text: 'Projects', link: '#projects' },
    { id: 'nav-5', text: 'Contact', link: '#contact' },
  ];

  return (
    <div className='overlay overlay-slide-left' id='overlay'>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={item.id} id={item.id} className={`slide-out-${index + 1}`}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;