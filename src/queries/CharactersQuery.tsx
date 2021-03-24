import { gql } from "@apollo/client";

export const GET_CHARACTERS_QUERY = gql`
query Characters($page: Int!, $name: String!) {
  characters(page: $page, filter: {name: $name}) {
    info {
      next
    }
    results {
      id
      name
      location {name}
      status
      origin {name}
      image
      gender
      species 
      episode {
        id, 
        name,
        air_date, 
        created, 
        episode
      }
    }
  }
}
`