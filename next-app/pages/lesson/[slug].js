import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getLessonBySlug, getAllLessonsWithSlug} from '@/lib/api'
import Layout from '@/components/layout'
import Lesson from '@/components/common/Lesson'
import markdownToHtml from '@/lib/markdownToHtml'

export default function LessonPage({ lesson, preview }) {
  const router = useRouter()

  if (!router.isFallback && !lesson?.slug) {
    return <ErrorPage statusCode={404} />
  }
  
  return (
    <div>
      {
        lesson === undefined 
        ? <div>Loading</div>
        :<Lesson {...lesson} />
      }
    </div>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const lesson = await getLessonBySlug(params.slug)
  const content = await markdownToHtml(lesson[0]?.description || '')
  return {
    props: {
      lesson: {...lesson[0], content}
    },
  }
}

export async function getStaticPaths() {
  const allLessons = await getAllLessonsWithSlug();
  return {
    paths: allLessons?.map((lesson) => `/lesson/${lesson.slug}`) || [],
    fallback: true,
  }
}
