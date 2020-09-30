import React from 'react'
import PropTypes from 'prop-types'

const Lesson = props => {
    const {id, title, description, age_rate, icon, lesson_type, status} = props;
    console.log(props);
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
                    
                </div>
                <p>{lesson_type.name}</p>
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

