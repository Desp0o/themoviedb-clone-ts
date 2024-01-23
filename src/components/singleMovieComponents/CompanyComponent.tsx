import React from "react"

interface logoPath {
    logo_path:string;
}

interface companyProps {
    companyList: logoPath[]
}

const CompanyComponent: React.FC<companyProps> = ({companyList = []}) => {

    return(
      <div className="CompanyComponent">
        {companyList?.map( (item, index) => {
            console.log(item.logo_path);
            
            return(
                <img key={index} src={`https://www.themoviedb.org/t/p/original${item.logo_path}`} alt="company" className="compnay_logo"/>
            )
        })}
      </div>
    )
}

export default CompanyComponent