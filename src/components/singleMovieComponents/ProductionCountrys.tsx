import React from "react";

interface countryList {
  name: string;
}

interface countryProps {
  countryList: countryList[];
}

const ProductionCountrys: React.FC<countryProps> = ({ countryList = [] }) => {
  return (
    <div className="ProductionCountrys">
      <h2>Production Countries</h2>

      <div className="prod_country_list">
        {countryList.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
      </div>
    </div>
  );
};

export default ProductionCountrys;
