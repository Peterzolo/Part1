export const Button = ({ onClick, text, className }) => (
  <button onClick={onClick} text={text} className={className}>
    {text}
  </button>
);
