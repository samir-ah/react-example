import { useCallback, useEffect, useState } from "react";
import Posts from "../components/blog-posts/Posts";
import { useHttpClient } from "../hooks/UseHttp";
import { getPosts } from "../utils/posts";

function BlogPostsPage() {
	const [error, setError] = useState();
	const [posts, setPosts] = useState();
	const { isLoading, axiosRequest } = useHttpClient();
	
	useEffect(() => {
		const loadPosts = async () => {
			try {
				const result = await axiosRequest(
					`https://jsonplaceholder.typicode.com/posts`,
					{ baseURL: "" }
				);
				setPosts(result.data);
			} catch (error: any) {
				setError(error?.data?.message);
			}
		}
		loadPosts();
	}, []);
console.log("rendenr");

	return (
		<>
			<h1>Our Blog Posts</h1>
			{isLoading && <p>Loading posts...</p>}
			{error && <p>{error}</p>}
			{!error && posts && <Posts blogPosts={posts} />}
		</>
	);
}

export default BlogPostsPage;
