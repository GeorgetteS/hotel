import { useEffect, useRef } from 'react';
import React from 'react';

import InputMask from 'react-input-mask';

import { useField } from 'formik';

import classNames from 'classnames';

import styles from './Input.module.scss';

const Input = ({ icon, ...props }) => {
  const [field, meta] = useField(props);

  const ref = useRef(null);

  useEffect(() => {
    if (meta.touched && meta.error && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [meta.error, meta.touched]);

  return (
    <div
      className={classNames(styles.container, meta.touched && meta.error ? 'has-error' : '')}
      ref={ref}>
      <div className={styles.column}>
        <div className={styles.wrapper}>
          {icon && (
            <div className={classNames(styles.icon, styles.icon_left)}>
              <img src={icon} alt="" />
            </div>
          )}
          <InputMask
            className={classNames(styles.input, icon && styles.input_left)}
            mask="+7 (999) 999-999"
            maskChar="_"
            {...field}
            {...props}
          />
        </div>
        {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
      </div>
    </div>
  );
};

export default Input;
