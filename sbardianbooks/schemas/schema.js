/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "books",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      // This is the display name for the type
      title: "Book",
      // The identifier for this document type used in the api's
      name: "book",
      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",
      // Now we proceed to list the fields of our document
      fields: [
        {
          title: "Author",
          name: "author",
          type: "string",
        },
        {
          title: "Year Read",
          name: "yearRead",
          type: "string",
        },
        {
          title: "ISBN",
          name: "isbn",
          type: "string",
        },
        {
          title: "Amazon Url",
          name: "amazonUrl",
          type: "string",
        },
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Image Url",
          name: "imageUrl",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "string",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Tags",
          name: "tagsSet",
          type: "array",
          of: [{ type: "string" }],
          options: {
            list: [
              { title: "Fantasy", value: "Fantasy" },
              { title: "Development", value: "Development" },
              { title: "Science Fiction", value: "Science Fiction" },
              { title: "History", value: "History" },
              { title: "Politics", value: "Politics" },
              { title: "Biography", value: "Biography" },
              { title: "Self Help", value: "Self Help" },
              { title: "Fiction", value: "Fiction" },
              { title: "Classics", value: "Classics" },
              { title: "Literature", value: "Literature" },
            ],
          },
        },
      ],
    },
    {
      title: "Site Image",
      name: "siteImage",
      type: "document",
      fields: [
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Name",
          name: "name",
          type: "string",
        },
      ],
    },
  ]),
})
