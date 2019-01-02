import gql from "graphql-tag";
import songParts from "./songParts"

export default gql`
${songParts}
query Song($id:ID!){
  song(id:$id){
    ...songParts
    lyrics
  }
}
`