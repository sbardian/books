import React from "react"
import PropTypes from "prop-types"
import { RecoilRoot, useSetRecoilState } from "recoil"
import { booksState } from "../state"

export const RecoilRootWrapper = ({ children }) => (
  <RecoilRoot>{children}</RecoilRoot>
)

RecoilRootWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

const books = [
  {
    node: {
      image: {
        asset: {
          gatsbyImageData: {
            images: {
              sources: [],
              fallback: {
                src: "https://cdn.sanity.io/images/xothad89/books/17f6d82f477d319378ab5e8b77fd75ee806149fa-326x499.jpg?w=326&h=499&auto=format",
                srcSet:
                  "https://cdn.sanity.io/images/xothad89/books/17f6d82f477d319378ab5e8b77fd75ee806149fa-326x499.jpg?w=320&h=490&auto=format 320w,\nhttps://cdn.sanity.io/images/xothad89/books/17f6d82f477d319378ab5e8b77fd75ee806149fa-326x499.jpg?w=326&h=499&auto=format 326w",
                sizes: "(min-width: 326px) 326px, 100vw",
              },
            },
            layout: "constrained",
            backgroundColor: "#14bfe3",
            width: 326,
            height: 499,
          },
        },
      },
      author: "Steven Pinker",
      amazonUrl:
        "https://www.amazon.com/Enlightenment-Now-Science-Humanism-Progress/dp/0143111388",
      id: "-9e13740c-6a60-5ff8-98e3-15e658d85a95",
      isbn: "978-0143111382",
      title: "Enlightenment Now",
      yearRead: "2019",
      tagsSet: ["History", "Self Help"],
      shortDescription: "The Case for Reason, Science, Humanism, and Progress",
      description:
        '<div id="iframeContent" dir="auto"><b><b>INSTANT <i>NEW YORK TIMES</i> BESTSELLER <br>A <i>NEW YORK TIMES</i> NOTABLE BOOK OF 2018<br>ONE OF&nbsp;<i>THE ECONOMIST\'S</i> BOOKS OF THE YEAR<br></b><br><b>"My new favorite book of all time." --Bill Gates </b><br><br>If you think the world is coming to an end, think again: people are living longer, healthier, freer, and happier lives, and while our problems are formidable, the solutions lie in the Enlightenment ideal of using reason and science.</b><br><br>Is the world really falling apart? Is the ideal of progress obsolete? In this elegant assessment of the human condition in the third millennium, cognitive scientist and public intellectual Steven Pinker urges us to step back from the gory headlines and prophecies of doom, which play to our psychological biases. Instead, follow the data: In seventy-five jaw-dropping graphs, Pinker shows that life, health, prosperity, safety, peace, knowledge, and happiness are on the rise, not just in the West, but worldwide. This progress is not the result of some cosmic force. It is a gift of the Enlightenment: the conviction that reason and science can enhance human flourishing.<br><br>Far from being a naïve hope, the Enlightenment, we now know, has worked. But more than ever, it needs a vigorous defense. The Enlightenment project swims against currents of human nature--tribalism, authoritarianism, demonization, magical thinking--which demagogues are all too willing to exploit. Many commentators, committed to political, religious, or romantic ideologies, fight a rearguard action against it. The result is a corrosive fatalism and a willingness to wreck the precious institutions of liberal democracy and global cooperation. <br><br>With intellectual depth and literary flair, <i>Enlightenment Now</i> makes the case for reason, science, and humanism: the ideals we need to confront our problems and continue our progress.</div>',
    },
  },
]

export const BooksWrapper = ({ children }) => {
  const setBooksState = useSetRecoilState(booksState)
  setBooksState(books)
  return <>{children}</>
}

BooksWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export const FilterHeadingWrapper = ({ children }) => {
  const setBooksState = useSetRecoilState(booksState)
  setBooksState(books)
  return <>{children}</>
}

FilterHeadingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export const YearFilterButtonsWrapper = ({ children }) => {
  const setBooksState = useSetRecoilState(booksState)
  setBooksState(books)
  return <>{children}</>
}

YearFilterButtonsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
