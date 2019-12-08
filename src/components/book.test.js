import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Book from "./book"
import { navigate } from "./__mocks__/gatsby"

jest.mock("gatsby")

const book = {
  node: {
    id: "9e13740c-6a60-5ff8-98e3-15e658d85a95",
    amazonUrl:
      "https://www.amazon.com/Enlightenment-Now-Science-Humanism-Progress/dp/0143111388",
    title:
      "Enlightenment Now: The Case for Reason, Science, Humanism, and Progress",
    isbn: "978-0143111382",
    description:
      "If you think the world is coming to an end, think again: people are living longer, healthier, freer, and happier lives, and while our problems are formidable, the solutions lie in the Enlightenment ideal of using reason and science.  Is the world really falling apart? Is the ideal of progress obsolete? In this elegant assessment of the human condition in the third millennium, cognitive scientist and public intellectual Steven Pinker urges us to step back from the gory headlines and prophecies of doom, which play to our psychological biases. Instead, follow the data: In seventy-five jaw-dropping graphs, Pinker shows that life, health, prosperity, safety, peace, knowledge, and happiness are on the rise, not just in the West, but worldwide. This progress is not the result of some cosmic force. It is a gift of the Enlightenment: the conviction that reason and science can enhance human flourishing.  Far from being a naïve hope, the Enlightenment, we now know, has worked. But more than ever, it needs a vigorous defense. The Enlightenment project swims against currents of human nature--tribalism, authoritarianism, demonization, magical thinking--which demagogues are all too willing to exploit. Many commentators, committed to political, religious, or romantic ideologies, fight a rearguard action against it. The result is a corrosive fatalism and a willingness to wreck the precious institutions of liberal democracy and global cooperation.  With intellectual depth and literary flair, Enlightenment Now makes the case for reason, science, and humanism: the ideals we need to confront our problems and continue our progress.",
    author: "Steven Pinker",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51kXUK2wo7L._SX324_BO1,204,203,200_.jpg",
    yearRead: "2019",
    tagsSet: ["History", "Self Help"],
    image: {
      asset: {
        fluid: {
          base64:
            "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAUDBAIGB//EACEQAAICAgMAAgMAAAAAAAAAAAECAwQAEQUSITFBFCNS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQME/8QAHxEAAgEEAgMAAAAAAAAAAAAAAQIAAxESMQQhEyKB/9oADAMBAAIRAxEAPwDj9NI7lOJpjH2OyCx1s5ZrxPNTaOKaNATrQb6yCrFZavCJKcThfN70TltqBjhLRVVVvfA2VD0AOzMbJyrnFevkXjj3gZ0ZySD8g7wzKSWy00n6emjrqPdeYZNrX9dTUmWIy3HHE21jEh/JWRT/AEnxklvmXrBgnSUlfAV+M1elSvwOwki2N+ASDWTW6luVSDWIJH1IuHhpN224GvyEOKajzhLclykZXHVu5BHmGLeJ467FTAAGySSOw8OGFxKWM//Z",
          aspectRatio: 0.6533066132264529,
          src:
            "https://cdn.sanity.io/images/xothad89/books/17f6d82f477d319378ab5e8b77fd75ee806149fa-326x499.jpg?w=800&h=1225&fit=crop",
          srcSet:
            "https://cdn.sanity.io/images/xothad89/books/17f6d82f477d319378ab5e8b77fd75ee806149fa-326x499.jpg?w=200&h=306&fit=crop 200w,\nhttps://cdn.sanity.io/images/xothad89/books/17f6d82f477d319378ab5e8b77fd75ee806149fa-326x499.jpg?w=326&h=499&fit=crop 326w",
          srcWebp:
            "https://cdn.sanity.io/images/xothad89/books/17f6d82f477d319378ab5e8b77fd75ee806149fa-326x499.jpg?w=800&h=1225&fit=crop&fm=webp",
          srcSetWebp:
            "https://cdn.sanity.io/images/xothad89/books/17f6d82f477d319378ab5e8b77fd75ee806149fa-326x499.jpg?w=200&h=306&fit=crop&fm=webp 200w,\nhttps://cdn.sanity.io/images/xothad89/books/17f6d82f477d319378ab5e8b77fd75ee806149fa-326x499.jpg?w=326&h=499&fit=crop&fm=webp 326w",
          sizes: "(max-width: 800px) 100vw, 800px",
        },
      },
    },
  },
}

describe("Book tests", () => {
  it("should render a book", () => {
    const { getByAltText } = render(<Book book={book} />)
    expect(
      getByAltText(
        "Enlightenment Now: The Case for Reason, Science, Humanism, and Progress"
      )
    ).toBeTruthy()
  })
  it("should click image button", () => {
    const { container } = render(<Book book={book} />)
    const button = container.querySelector("button")
    expect(button).toBeTruthy()
    fireEvent.click(button)
    expect(navigate).toHaveBeenCalledTimes(1)
  })
})
