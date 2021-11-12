import React from 'react';
import { TypeInput } from 'src/common/enums/enums';
import { Input, Button } from 'src/componets/common/common';
import styles from './styles.module.scss';

function FormComment () {
  return (
    <div className={styles.formWrapper} >
      <Input
        type={TypeInput.TEXTAREA}
        className={styles.input}
        label='Comment'
      />
      <Input
        type={TypeInput.TEXT}
        className={styles.input}
        label='Name'
      />
      <Button>Submit</Button>
    </div>
  );
};

export default FormComment;
