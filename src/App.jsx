import Blogs from "./pages/Blogs";
import { Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/blogs' element={<Blogs />} />
				{/* <Route path="blog/:idBlog" */}
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/*' element={<h1>NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;
