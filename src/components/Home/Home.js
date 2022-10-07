import React, { useContext, useRef } from "react";
import Styles from "./Home.module.css";
import Layout from "../Layout/Layout";
import DeveloperContext from "../../store/developer-context";
import Card from "../Card/Card";

const Home = () => {
  const developerCtx = useContext(DeveloperContext);
  const inputElement = useRef();

  return (
    <Layout>
      <form
        className={Styles.form}
        onSubmit={(event) => developerCtx.serarchHandler(event, inputElement)}
      >
        <input type="text" className={Styles.searchInput} ref={inputElement} />
        <button type="submit">Search Developer</button>
      </form>
      {developerCtx.serarchResult.length > 0 && (
        <div className={Styles.result}>
          {developerCtx.serarchResult.map((arr) => {
            return <Card developer={arr} key={arr.id} />;
          })}
        </div>
      )}
    </Layout>
  );
};

export default Home;
