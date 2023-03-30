// Import all the required modules
import Rating from "./Rating";

const Ratings = () => {
    return (
        <div className="h-screen bg-gray-100 text-black px-24 flex items-center justify-between">
            <div className="flex flex-col w-full">
                <div className="py-10">
                    <div className="w-24 h-2 bg-gradient-to-r from-secondary to-primary"></div>
                    <h1 className="text-5xl font-semibold w-4/12 pt-5 pr-24">What students say about us</h1>
                </div>

                <div className="flex flex-wrap justify-evenly w-full">
                    <Rating />
                    <Rating />
                    <Rating />
                </div>
            </div>
        </div>
    )
}

export default Ratings;
