
import { getAllPostsForHome } from '@/lib/api'


export default function Courses(){
    return(
        <>
            <div>Course page</div>
        </>
    )
}


export async function getStaticProps({ preview = null }) {
    const allPosts = (await getAllPostsForHome(preview)) || []
    return {
      props: { allPosts, preview },
    }
  }