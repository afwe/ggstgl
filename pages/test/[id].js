import { getAllPostIds, getPostData} from "../../lib/detail";
export default function Detail({ postData }) {
    return (
        <div>
            {postData.id}
        </div>
    )
}
export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return{
        props: {
            postData
        }
    }
}