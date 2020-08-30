import React from 'react';

const categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

const Header = ({score, categoryIndex}) => {
  return (
    <header className="header-wrapper">
    <div className="logo-and-score-wrapper">
      <div className="logo" />
      <div className='score'>Score:{score}</div>
    </div>
    <ul className="pagination">
      {categories.map((category, index) => {
        return (
        <li key={category} className={`page-item ${ index === categoryIndex ? 'active' : 'disabled'}`}>
          <a href="/#" className='page-link'>{category}</a>
        </li>
        )
      })}
    </ul>
    </header>
  )
}

export default Header;