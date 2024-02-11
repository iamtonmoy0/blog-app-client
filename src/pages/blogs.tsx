import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../graphql/queries";

export default function Blogs() {
  const { loading, data, error, refatch } = useQuery(GET_BLOGS);
  if (loading) {
    return <p>Its loading</p>;
  }
  if (error) return <p>Error occured!</p>;
  console.log(data);
  return <div> {JSON.stringify(data)} </div>;
}
