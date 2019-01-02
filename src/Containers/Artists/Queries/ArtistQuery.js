import gql from "graphql-tag";
import songParts from "../../Songs/Queries/songParts"

export default gql`
${songParts}
query Artist($id:ID!){
    artist(id:$id){
      _id
      name
      country{
          name
      }
      songs{
        ...songParts
      }
}}`