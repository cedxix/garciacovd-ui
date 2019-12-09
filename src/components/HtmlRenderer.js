import React from 'react';
import PropTypes from 'prop-types'
import Showdown  from 'showdown'


export const HTMLRender = ({markdown}) => {
  console.log(markdown)
  const converter = new Showdown.Converter();
  return(
    <div dangerouslySetInnerHTML={{__html:converter.makeHtml(markdown)}} />
  )
}
HTMLRender.propTypes = {
  markdown: PropTypes.string,
}
export default HTMLRender