import React from 'react';

const Header = (props) => {
  return (
    <header className="header-wrapper">
    <div className="logo-and-score-wrapper">
      <div className="logo" />
      <div className='score'>1/10</div>
    </div>
    <ul className="pagination">
      <li className="page-item">
        <a href="/#" className='page-link'>Разминка</a>
      </li>
      <li className="page-item">
        <a href="/#" className='page-link'>Воробьиные</a>
      </li>
      <li className="page-item">
        <a href="/#" className='page-link'> Лесные птицы</a>
      </li>
      <li className="page-item">
        <a href="/#" className='page-link'>Певчие птицы</a>
      </li>
      <li className="page-item">
        <a href="/#" className='page-link'> Хищные птицы</a>
      </li>
      <li className="page-item">
        <a href="/#" className='page-link'> Морские птицы</a>
      </li>
    </ul>
    </header>
  )
}

export default Header;