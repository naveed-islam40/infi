import { useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type AnimateButtonProps = {
  buttonText: string;
  icon: string;
  parentclasName?: string;
  cicleClassName?: string;
  linkClassName?: string;
  path?: string;
  type?: 'button' | 'submit'; // <-- New type
  onClick?: () => void;
};

const AnimateButton = ({
  buttonText,
  icon,
  parentclasName,
  cicleClassName,
  linkClassName,
  path,
  type = 'button',
  onClick,
}: AnimateButtonProps) => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({ scale: 1, x: 45 });
  };

  const handleMouseLeave = () => {
    controls.start({ x: -50, scale: 0 });
  };

  return (
    <div
      className={parentclasName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.span
        animate={controls}
        initial={{ scale: 0 }}
        className={cicleClassName}
        transition={{ type: "spring", duration: 1 }}
      />

      {type === 'submit' || type === 'button' ? (
        <button type={type} className={linkClassName} onClick={onClick}>
          {buttonText}
          <img src={icon} alt="" />
        </button>
      ) : (
        <Link to={path || '#'} className={linkClassName}>
          {buttonText}
          <img src={icon} alt="" />
        </Link>
      )}
    </div>
  );
};

export default AnimateButton;
