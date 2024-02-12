import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../graphql/queries";
import BlogsList from "../components/BlogsList";

export default function Blogs() {
  const { loading, data, error, refatch } = useQuery(GET_BLOGS);
  if (loading) {
    return <p>Its loading</p>;
  }
  if (error) return <p>Error occured!</p>;

  return (
    <>
      <BlogsList data={data.blogs} />;
    </>
  );
}
