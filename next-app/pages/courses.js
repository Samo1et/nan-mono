
import { getAllLessons } from '@/lib/api'
import Layout from '@/components/layout'
import LessonList from '@/components/common/LessonList'

export default function Courses({allLesson}){

    return(
        <Layout>
            <div>Course page</div>
            <LessonList list={allLesson} /> 
        </Layout>
    )
}


export async function getStaticProps({ preview = null }) {
    const allLesson = (await getAllLessons()) || []
    return {
      props: { allLesson },
    }
  }