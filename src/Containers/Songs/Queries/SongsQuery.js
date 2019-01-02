import gql from "graphql-tag";
import songParts from "./songParts"

export default gql`
${songParts}
{
  songs(sort:"createdAt:desc"){
    ...songParts
  }
}`