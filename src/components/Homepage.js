import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import Testimonial from "./testimonials/Testimonials";
import Footer from "./Footer/footer";
import InSchoolLan from "./InSchoolNum/InSchoolLan";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <InSchoolLan />
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
}