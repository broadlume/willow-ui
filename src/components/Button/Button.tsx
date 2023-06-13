import styles from './Button.module.scss';

const Button = () => {
  const { button, test } = styles;
  return <button className={`${button} ${test}`}>I'm a button</button>;
};

export default Button;
