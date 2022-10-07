import Styles from "./ProjectTable.module.css";

const ProjectTable= (props)=>{
  return (
    <div className={Styles.cardOuter}>
      <div className={Styles.cardCover}>
        <h1>Project List</h1>
        <table className={Styles.projectTable}>
          <tr>
            <th>Project Name</th>
            <th>Technology</th>
            <th>Deadline</th>
          </tr>
          {props.developer.projects.map((project, i) => {
            return (
              <tr key={i}>
                <td>{project.name}</td>
                <td className={Styles.technology}>
                  {project.technology.map((arr, idx) => (
                    <span key={idx}>{arr}</span>
                  ))}
                </td>
                <td>{project.deadline}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ProjectTable;