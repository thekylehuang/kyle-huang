import { Geist } from 'next/font/google'
const geist = Geist({ subsets: ['latin'] })

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset"; 
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ label, type, className, onClick }) => {
  return(
    <button type={type} className={`${geist.className} ${className} border border-violet-800 hover:border-violet-700 bg-violet-950 py-2 px-5 rounded-lg font-medium text-neutral-50 transition-colors`} onClick={onClick}>{label}</button>
  );
}

export default Button;