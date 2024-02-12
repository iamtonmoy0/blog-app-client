import { Box } from "@mui/material";
import blogStyles from "../styles/blog-list-styles";
import BlogCard from "./BlogCard";

export default function BlogsList({ data }) {
  // Check if data is defined and is an array before mapping over it
  if (!data || !Array.isArray(data)) {
    return null; // Or any other appropriate handling for the error case
  }

  return (
    <Box sx={blogStyles.container}>
      {data.map((blog) => (
        <BlogCard key={blog.id} blog={blog} /> // Ensure to provide a unique key for each element when mapping over arrays
      ))}
    </Box>
  );
}
