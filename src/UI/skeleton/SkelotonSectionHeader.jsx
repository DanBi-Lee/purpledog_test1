import React from 'react';
import styles from "./SkelotonSectionHeader.module.css";

function SkelotonSectionHeader ({inherited_styles, isError=false}) {
  return (
    <header className={[inherited_styles.section__header, styles.section__header].join(" ")}>
      <p className={styles.skeleton_title} />
      <p className={styles.skeleton_description} />
      {isError && <div className={styles.error_modal}>⚠ 에러가 발생했습니다.</div>}
    </header>
  );
}

export default SkelotonSectionHeader;