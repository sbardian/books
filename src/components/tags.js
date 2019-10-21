import React from "react"
import Proptypes from "prop-types"
import styled from "@emotion/styled"

const TagWrapper = styled.div`
  display: inline-block;
`

const Tag = styled.div`
  display: inline;
  font-size: 1.3em;
  color: #1f1f20;
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid #1f1f20;
  border-radius: 5px;
`

const Tags = ({ tags }) => {
  return (
    <TagWrapper>
      {tags.map(tag => (
        <Tag>#{tag} </Tag>
      ))}
    </TagWrapper>
  )
}

Tags.propTypes = {
  tags: Proptypes.arrayOf(Proptypes.string).isRequired,
}

export default Tags
