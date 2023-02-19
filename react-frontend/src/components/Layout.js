import { Link, Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


const Layout = () => {
	return (
		<div className="Wrapper">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}


export { Layout }