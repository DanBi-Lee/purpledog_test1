import React from 'react';
import SectionHeader from '../UI/skeleton/SkelotonSectionHeader';
import styles from './MainSection.module.css';

function MainSection({
    state,
    title,
    description,
    children,
    ...props
}) {

    let $sectionTitle = (
        <header className={styles.section__header}>
            <h2>{title}</h2>
            <p>{description}</p>
        </header>
    );

    if (state
        ?.isLoading) {
        $sectionTitle = <SectionHeader inherited_styles={styles}/>;
    }
    if (state
        ?.error) {
        $sectionTitle = <SectionHeader inherited_styles={styles} isError={true}/>;
    }

    return (
        <section {...props}>
            {$sectionTitle}
            {children}
        </section>
    );
}

export default MainSection;