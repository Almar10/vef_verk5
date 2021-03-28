import React from 'react';
import s from './Layout.scss'

export function Layout({ title, children }) {
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <h1>{title}</h1>
      </header>
      <main className={s.layout__main}>
        {children}
      </main>
      <footer>
        <hr></hr>
        <p>Fréttir frá <a href="https://ruv.is">RÚV</a></p>
      </footer>
    </div>
  )
}