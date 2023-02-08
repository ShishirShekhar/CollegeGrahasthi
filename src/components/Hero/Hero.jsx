import Nav from "./Nav";
import Search from '../Search';

const Hero = () =>  {
    return (
        <div className="bg-heroImg bg-full text-white px-24 pb-52">
            <Nav />
            <div className="mt-40 w-6/12 flex flex-col gap-4">
                <p className="text-5xl font-extrabold">All your accommodation needs at one place.</p>
                <p className="text-gray-200 mr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi sequi voluptatum veritatis excepturi ducimus minus doloribus beatae tempora dolore.</p>
                <div className="mr-12">
                    <Search value="Search by city name, area or property" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
