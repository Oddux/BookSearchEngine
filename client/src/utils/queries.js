import {gql} from "@apollo/client"
export const QUERY_ME = gql `
query Me {
    me {
      username
      savedBooks {
        _id
        authors
        description
        image
        link
        title
        bookId
      }
    }
  }
`