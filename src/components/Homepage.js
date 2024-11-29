import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import Testimonial from "./testimonials/Testimonials";
import Footer from "./Footer/footer";
import InSchoolLan from "./InSchoolNum/InSchoolLan";
import LatestNews from "./LatestNews/LatestNews";
import InstructorSec from "./InstructorSection/InstructorSec";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <InSchoolLan />
            <LatestNews />
            <InstructorSec />
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
}