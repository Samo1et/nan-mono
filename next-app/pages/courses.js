
import { getAllPostsForHome } from '@/lib/api'
import Layout from '@/components/layout'


export default function Courses(){
    return(
        <Layout>
            <div>Course page</div>
        </Layout>
    )
}


export async function getStaticProps({ preview = null }) {
    const allPosts = (await getAllPostsForHome(preview)) || []
    return {
      props: { allPosts, preview },
    }
  }