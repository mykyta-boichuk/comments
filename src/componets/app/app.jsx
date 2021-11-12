import React from 'react';
import styles from './styles.module.scss';
import FormComment from '../form-comment/form-comment';

function App () {
  return (
    <div className={styles.app}>
        <div>
            <FormComment/>
        </div>
    </div>
  );
}

export default App;
