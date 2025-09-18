/** Just a simple component to be used in forms to display helper text */
const FormHelperText = (props: { text: string }) => {
  return (
    <span className='text-sm font-small italic leading-none text-muted-foreground '>
      {props.text}
    </span>
  );
};

export { FormHelperText };
