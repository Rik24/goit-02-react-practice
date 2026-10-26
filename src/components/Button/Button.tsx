interface ButtonProps {
  textContent: string;
  handleClick: () => void;
}

export function Button({ textContent, handleClick }: ButtonProps) {
  return <button onClick={handleClick}>{textContent}</button>;
}
