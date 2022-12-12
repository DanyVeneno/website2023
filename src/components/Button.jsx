import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-montserrat font-bold text-[18px] text-white outline-none ${styles} rounded-[10px]`}
    >
      Hagamos Negocio
    </button>
  );
};

export default Button;
