import gql from "graphql-tag";

export default gql`
{
  artists{
    id: _id
    name
  }
}`