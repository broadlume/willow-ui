import styles from './Button.module.scss';

const Button = () => {
  const { button, test } = styles;
  return (
    <button className={`${button} ${test}`}>
      <h1 className='text-yellow-200'>
        I'm a button, but golly do I look stupid
      </h1>
    </button>
  );
};

export default Button;
