import Navbar from '../component/nav';
import Usercard from '../component/userCard';
import appStyle from '../styles/app.module.scss';
import 'github-markdown-css'
import '../styles/diy-antd.css'
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

export default MyApp
