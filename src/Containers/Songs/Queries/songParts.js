export default `
fragment songParts on Song{
      id:_id
      title
      url
      artists{
        id:_id
        name
}}`