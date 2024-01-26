import React, { useState } from "react";
import { Link } from "react-router-dom";

interface resPannelSubLinkProps {
  linkName: string;
}

export const ResPannelSubLink: React.FC<resPannelSubLinkProps> = ({
  linkName,
}) => {
  const [linkOpen, setLinkOpen] = useState(false);
  const [isExtend, setIsExtend] = useState("mainPannelLinksClosed");

  const linkExtendTrigger = () => {
    if (linkOpen) {
      setLinkOpen(false);
      setIsExtend("mainPannelLinksClosed");
    } else {
      setLinkOpen(true);
      setIsExtend("mainPannelLinksOpened");
    }
  };

  let link = linkName;

  let link1Name = "";
  let link2Name = "";
  let link3Name = "";
  let link4Name = "";
  let path1Name = "./pages/PopularMovies/";
  let path2Name = "";
  let path3Name = "";
  let path4Name = "";

  if (link === "Movies") {
    link1Name = "Popular";
    link2Name = "Now Playing";
    link3Name = "Upcoming";
    link4Name = "Top Rated";
  } else if (link === "TV Shows") {
    link1Name = "Popular";
    link2Name = "Airing Today";
    link3Name = "On TV";
    link4Name = "Top Rated";
  } else if (link === "People") {
    link1Name = "Popular People";
    link2Name = "";
    link3Name = "";
    link4Name = "";
  }

  return (
    <div className={isExtend}>
      <p className="linkTitle" onClick={linkExtendTrigger}>
        {link}
      </p>

      <div className="pannelInnerLinks">
        {link1Name && <Link to={path1Name}>{link1Name}</Link>}
        {link2Name && <Link to={path2Name}>{link2Name}</Link>}
        {link3Name && <Link to={path3Name}>{link3Name}</Link>}
        {link4Name && <Link to={path4Name}>{link4Name}</Link>}
      </div>
    </div>
  );
};
