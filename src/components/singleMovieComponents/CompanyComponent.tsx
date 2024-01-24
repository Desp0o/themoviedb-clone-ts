import React from "react";
import "./singleMovComp.css"

interface logoPath {
  logo_path: string;
}

interface companyProps {
  companyList: logoPath[];
}

const CompanyComponent: React.FC<companyProps> = ({ companyList = [] }) => {

  return (
    <div
      className="CompanyComponent"
      style={{
        gridTemplateColumns: `repeat(${Math.min(companyList.length, 4)}, auto)`,
      }}
    >
      {companyList?.map((item, index) => {
        return (
          item.logo_path !== null && (
            <img
              key={index}
              src={`https://www.themoviedb.org/t/p/original${item.logo_path}`}
              alt="company"
              className="compnay_logo"
            />
          )
        );
      })}
    </div>
  );
};

export default CompanyComponent;
