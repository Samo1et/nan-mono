
import { getAllPostsForHome } from '@/lib/api'
import Layout from '@/components/layout'


export default function Courses(){
    return(
        <Layout>
            <div>О платформе</div>
            <div>Тест</div>
            <div>Ссылка на курсы</div>
            <div>Цена</div>
            <div>Вопросы</div>
            <div>Новости</div>
        </Layout>
    )
}


export async function getStaticProps({ preview = null }) {
    const allPosts = (await getAllPostsForHome(preview)) || []
    return {
      props: { allPosts, preview },
    }
  }