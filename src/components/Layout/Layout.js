import Styles from './Layout.module.css';

const Layout = (props) =>{
  return (
    <div className={Styles.layout}>
      <div className={Styles.homeDotLayout}>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;