import React from 'react';

const Header = (props) => {
  return (
    <header className="header-wrapper">
    <div className="logo-and-score-wrapper">
      <div className="logo" />
      <div className='score'>1/10</div>
    </div>
    <div className="category-wrapper">
      <div className="category">Разминка</div>
      <div className="category">Воробьиные</div>
      <div className="category">Лесные птицы</div>
      <div className="category">Певчие птицы</div>
      <div className="category">Хищные птицы</div>
      <div className="category">Морские птицы</div>
    </div>
    </header>
  )
}

export default Header;