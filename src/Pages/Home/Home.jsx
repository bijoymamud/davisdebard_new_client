import Container from "../../Layout/Container/Container"
import Banner from "./Banner"
import BookPromo from "./BookPromo"
import Feature from "./Feature"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <div>
       <Banner/>
       <Feature/>
       <Testimonials/>
       <BookPromo/>
    </div>
  )
}

export default Home
