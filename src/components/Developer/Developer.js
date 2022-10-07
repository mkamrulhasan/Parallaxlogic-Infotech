import React, {useContext} from "react";
import Layout from "../Layout/Layout";
import Styles from "./Developer.module.css";
import { Link, useParams } from "react-router-dom";
import InfoCard from "./InfoCard/InfoCard";
import DeveloperContext from "../../store/developer-context";
import ProjectTable from "./ProjectTable/ProjectTable";

const Developer = () => {
  const { developerId } = useParams();

  const developerCtx = useContext(DeveloperContext);

  const developer =developerCtx.developer
    .map((arr) => arr.id)
    .indexOf(parseInt(developerId));
  return (
    <Layout>
      <Link to="/" className={Styles.backBtn}>
        <span class="material-symbols-outlined">arrow_back_ios</span>Back
      </Link>
      <div className={Styles.container}>
        <InfoCard developer={developerCtx.developer[developer]} />
        <ProjectTable developer={developerCtx.developer[developer]} />
      </div>
    </Layout>
  );
};

export default Developer;
