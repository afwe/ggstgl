import { withRouter } from 'next/router';
import { getDetail } from '../lib/detail';
const  Detail = function({ router, postData }){
    let { id } = router.query;
    let data = postData;
    return (
        <div>
            {id}
        </div>
    )
}
export async function getStaticProps() {
  const allPostsData = await getDetail(1)
  return {
    props: {
      postData: allPostsData
    }
  }
}
  
export default withRouter(Detail)