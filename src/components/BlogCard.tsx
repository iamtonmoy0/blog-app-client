import { Box, Typography } from "@mui/material";
import blogStyles from "../styles/blog-list-styles";

export default function BlogCard({ blog }) {
  console.log(blog);
  return (
    <Box sx={blogStyles.card}>
      <Box sx={blogStyles.cardHeader}>
        <Box></Box>
        <Typography variant="h4" sx={blogStyles.title}>
          {blog.title}
        </Typography>
        <Box sx={blogStyles.cardContent}>
          <Typography sx={blogStyles.contentText}>{blog.content}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
