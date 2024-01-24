import React, { useEffect, useState } from "react";
import "./singleMovComp.css"

interface logoPath {
  logo_path: string;
  production_companies: []
}

interface companyProps {
  companyList: logoPath[];
}

const CompanyComponent: React.FC<companyProps> = ({ companyList = [] }) => {

  const [listOffset, setLIstOffset] = useState(5)

  //filter companys with icons
  const companyWithLogos = companyList.filter(item => item.logo_path !== null).length;

  //set offset for max length of company according window width
  useEffect(()=>{
    if(window.innerWidth < 768){
      setLIstOffset(3)
    }else if(window.innerWidth > 768){
      setLIstOffset(5)
    }
  },[])

  return (
    <div className="CompanyComponent">

      <h2>Production Companies</h2>

      <div className="company_list" style={{ //make columns according company icons
        gridTemplateColumns: `repeat(${Math.min(companyWithLogos, listOffset)}, auto)`,
      }}>
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
    </div>
  );
};

export default CompanyComponent;
