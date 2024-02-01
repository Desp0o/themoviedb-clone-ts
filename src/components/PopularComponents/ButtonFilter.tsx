import React from "react";

interface BtnFilterProps {
    nameOfClass: string;
}

const ButtonFilter: React.FC<BtnFilterProps> = ({nameOfClass}) => {
  return (
    <div className={`ButtonFilter ${nameOfClass}`}>Search</div>
  )
}

export default ButtonFilter