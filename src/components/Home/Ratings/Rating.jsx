import profile from "../../../img/profile.jpg";

const Rating = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm w-80 py-8 px-6">
            <div className="text-secondary text-lg">★★★★★</div>
            <div className="py-4 text-gray-600 font-semibold tracking-wider leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, dolorem ex unde nemo a velit nobis nesciunt cupiditate voluptas dolor!</div>
            <div className="py-4 flex">
                <img src={profile} alt="profile" className="rounded-full w-10" />
                <div className="pl-4">
                    <p className="font-bold">Shishir Shekhar</p>
                    <p className="text-gray-700 text-sm">Location</p>
                </div>
            </div>
        </div>
    )
}

export default Rating;
