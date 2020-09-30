import React from 'react'
import PropTypes from 'prop-types'

function Answer({image, isRight, name, type, onClick}) {
    if (type === 'image') {
        const imageUrl = `${
            image.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
          }${image.url}`
        const imageStyles = {
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            height: 100,
            width: 100,
            display: 'inline-block',
            backgroundSize: 'contain'
        }
        return (
            <div onClick={() => onClick(isRight)}>
                <div style={imageStyles}></div>
            </div>
        )
    } else return null

}

Answer.propTypes = {
    image: PropTypes.shape({
        url: PropTypes.string
    }),
    isRight: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default Answer

