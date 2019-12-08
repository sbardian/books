import React from "react"
import Proptypes from "prop-types"
import styled from "@emotion/styled"
import { navigate } from "gatsby"

const TagWrapper = styled.div`
  display: inline-block;
  padding: 2em;
`

const Tag = styled.div`
  display: inline-box;
  font-size: 1.3em;
  color: #1f1f20;
  border: 1px solid #1f1f20;
  border-radius: 5px;
  margin: 0.5em;
`

const TagButton = styled.button`
  box-shadow: none;
  border: none;
  background-color: transparent;
  padding: 0.5em;
  cursor: pointer;
`

const Tags = ({ tags }) => {
  return (
    <TagWrapper>
      {tags.map(tag => (
        <Tag key={`${tag}`}>
          <TagButton
            onClick={() => navigate("/", { state: { filterState: tag } })}
          >
            #{tag}
          </TagButton>
        </Tag>
      ))}
    </TagWrapper>
  )
}

Tags.propTypes = {
  tags: Proptypes.arrayOf(Proptypes.string).isRequired,
}

export default Tags
