import Navbar from '../component/nav';
import Usercard from '../component/userCard';
import appStyle from '../styles/app.module.scss';
import 'github-markdown-css';
import '../styles/diy-antd.css';
import { wrapper } from '../redux/store';
import { useEffect } from 'react';
import { setUserId } from '../redux/actions/user';
import { checkLogin } from '../fetch/user';
import { handleErrRes } from '../util/handleErrRes';
import { connect } from 'react-redux';
function MyApp({ Component, pageProps }) {
  return (
    <div className={appStyle.appContainer}>
      <Navbar className={appStyle.nav}/>
      <div className={appStyle.pageCluster}>
        <Usercard style={{width: 300, height: 400}}/>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
const mapStateToProps = ()=>{
  return {}
}
const mapDispathToProps = {
  setUserId
}
export default wrapper.withRedux(connect(mapStateToProps, mapDispathToProps)(MyApp));
