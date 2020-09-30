import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Lesson = props => {
    const {id, title, description, age_rate, icon, lesson_type, status,slug} = props;

    const imageUrl = `${
        icon.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
      }${icon.url}`
    const imageStyles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        height: 100,
        width: 100,
        display: 'inline-block',
        backgroundSize: 'contain'
    }

    return (
        <div>
            {
                status === 'published' &&
                <>
                    <div style={imageStyles}>
                        <Link as={`/lesson/${slug}`} href="/lesson/[slug]">
                            <a className="hover:underline">{title}</a>
                        </Link>
                    </div>
                </>
            }
        </div>
    )
}

function LessonList({list = []}) {
    return (
        <div>
            {list.length !== 0 && list.map(lessonProps => <Lesson key={'lesson'+lessonProps.id} {...lessonProps}/>)}
        </div>
    )
}

LessonList.propTypes = {
list: PropTypes.array.isRequired
}

export default LessonList

