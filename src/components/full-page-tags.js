import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import { useRecoilValue } from "recoil"
import { fullpageTagsState } from "../state"

const FullPageTagWrapper = styled.div`
  display: grid;
  gap: 1.2em;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
`

const FullPageTagButton = styled.button`
  display: grid;
  gap: 2rem;
  grid-template-rows: repeat(auto-fit, 150px);
  align-items: center;
  padding: 0.5em;
  font-size: 2em;
  color: #1f1f20;
  border: none;
  border-radius: 5px;
  margin: 0.5em;
  background: #606d80;
  box-shadow: 0px 1px 1px 0px rgba(26, 25, 26, 1);
  &:hover {
    background: #607d80;
    cursor: pointer;
    color: white;
  }
`

const FullPageTags = () => {
  const tags = useRecoilValue(fullpageTagsState)

  return (
    <FullPageTagWrapper>
      {tags.map((tag) => (
        <FullPageTagButton
          key={tag.id}
          onClick={() => navigate("/", { state: { filterState: tag } })}
        >
          #{tag}
        </FullPageTagButton>
      ))}
    </FullPageTagWrapper>
  )
}

export default FullPageTags
