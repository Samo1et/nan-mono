import React from 'react'
import Answer from '@/components/common/Answer'
import markdownStyles from '../markdown-styles.module.css'

export default function Lesson(props) {
    const {age_rate, description, lesson_type, answers=[], content} = props;
    const handeAnswerClick = (isRight)=> {
        if (isRight) {
            alert('Правильно!') 
        }
    }

    return (
        <div>
            <div className={markdownStyles['markdown']}
                 dangerouslySetInnerHTML={{ __html: content }} />
            <div>
                <h2>Ответы</h2>
                {
                    answers.length !== 0 &&
                    answers
                    .map(answer => {
                    return <Answer onClick={handeAnswerClick} key={'answer-' + answer.id} {...answer}/>
                })
                }
            </div>
        </div>
    )
}
