import { useState, useEffect } from "react";
import { Button } from "reactstrap";

function Wishlist() {
	//2.creez variabila de stare pentru date
	const [wishListBlogs, setWishListBlogs] = useState([]);
	//1.preluare date din Local Storage
	useEffect(() => {
		const blogsString = localStorage.getItem("bloguri");
		if (blogsString !== null) {
			const blogs = JSON.parse(blogsString);
			setWishListBlogs(blogs);
		}
	}, []);
	const onDelete = (blogId) => {
		const filteredBlogs = wishListBlogs.filter((blog) => blog.id !== blogId);
		localStorage.setItem("bloguri", JSON.stringify(filteredBlogs));
		setWishListBlogs(filteredBlogs);
	};
	return (
		<>
			<h2>Wishlist</h2>
			<ul>
				{wishListBlogs.map((blog, index) => {
					return (
						<li key={index}>
							{blog.title}
							<Button
								color='danger'
								className='mt-2 ms-4'
								onClick={() => {
									onDelete(blog.id);
								}}>
								DELETE
							</Button>
						</li>
					);
				})}
			</ul>
		</>
	);
}
export default Wishlist;
