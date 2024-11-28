/* eslint-disable react/prop-types */

const Button = ({ Children }) => {
  return <div className="bg-customGreen rounded-full px-2.5 py-2.5">
        {Children}
    </div>;
};

export default Button;
