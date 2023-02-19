import Fullscreen from "../components/Homepage/Fullscreen";
import About from "../components/Homepage/About";
import Comfort from "../components/Homepage/Comfort";


function Homepage() {
	return(
	<main>
			<Fullscreen></Fullscreen>
			<About/>
			<Comfort/>
			{/* <Room/> */}
	</main>
	)
}



export default Homepage