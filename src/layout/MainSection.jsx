import React from 'react';
import styles from './MainSection.module.css';

function MainSection ({title, description, children, ...props}) {
  return (
      <section {...props}>
          <header className={styles.section__header}>
                <h2>{title}</h2>
                <p>{description}</p>
            </header>
          {children}
      </section>
  );
}

export default MainSection;