import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import ImageCarousel from "../components/Room/ImageCarousel";
import Button from "../components/Button";
import SecButton from "../components/SecButton";
import Ratings from "../components/Home/Ratings/Ratings";

const Room = () => {
  return (
    <div>
      <Nav />
      <div className="px-10 py-4 bg-slate-100 flex justify-center">
        <ImageCarousel />
        <div className="px-10 py-5">
          <h1 className="font-bold text-4xl">Title here</h1>

          <p className="text-xs text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            nihil.
          </p>

          <div className="flex gap-2 items-center text-xs">
            <p className="font-semibold">5.0</p>
            <div className="text-secondary">★★★★★</div>
          </div>

          <div className="pt-2">
            <h1>Features</h1>
            <ul className="flex flex-wrap text-gray-500">
              <li className="pr-2">
                <span className="text-xl md:text-2xl lg:text-3xl">·</span>Wifi
              </li>
              <li className="pr-2">
                <span className="text-xl md:text-2xl lg:text-3xl">·</span>AC
              </li>
              <li className="pr-2">
                <span className="text-xl md:text-2xl lg:text-3xl">·</span>Chair
              </li>
              <li className="pr-2">
                <span className="text-xl md:text-2xl lg:text-3xl">·</span>
                Kitchen
              </li>
              <li className="pr-2">
                <span className="text-xl md:text-2xl lg:text-3xl">·</span>Fir
                Security
              </li>
              <li className="pr-2">
                <span className="text-xl md:text-2xl lg:text-3xl">·</span>Animal
                Friendly
              </li>
            </ul>
          </div>

          <p>
            <span className="font-bold text-xl">₹3000</span> /month
          </p>

          <div className="w-full gap-2">
            <Button to="#" value="Book Now" />
            <SecButton to="#" value="Message Now" />
          </div>
        </div>
      </div>

      <div className="px-10">
        <h1 className="text-xl font-semibold py-2">Description</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          molestiae magnam illo repudiandae vero nesciunt ea at amet tempore
          enim, consequatur quas iusto voluptate excepturi et quis assumenda,
          optio explicabo. Dicta vel, consequatur error, animi in distinctio
          nostrum excepturi deserunt illo perspiciatis minus quisquam mollitia
          fugit expedita consequuntur culpa eveniet laudantium dolores assumenda
          ad omnis commodi cumque. Eius adipisci ipsa autem ea odio accusamus
          veniam unde, officia quod. Tempore quos quisquam vitae exercitationem
          nihil quae debitis qui saepe ab placeat labore suscipit nesciunt sed
          inventore cumque libero, facere veniam quas! Quam recusandae tenetur
          saepe excepturi aspernatur ab, laudantium nulla optio nostrum fugit
          sapiente assumenda numquam doloribus laboriosam enim, consectetur
          impedit. Beatae et nulla est cumque enim adipisci doloremque eos
          veritatis ipsum ipsam modi quos nostrum minima at incidunt magni culpa
          corrupti totam, illum expedita ducimus possimus deleniti temporibus
          hic. Velit facilis natus quidem fugit veniam quo eius? Ex odit iure
          quisquam laudantium reprehenderit natus eveniet quis, distinctio sunt
          vel adipisci perferendis, autem, tempore deserunt temporibus.
          Assumenda voluptates labore delectus id vitae, nesciunt eligendi esse,
          quis ipsum architecto autem nisi exercitationem suscipit, mollitia
          ratione earum ipsa laboriosam temporibus quasi sed libero natus
          veritatis. Iure ut, dignissimos ea necessitatibus quae delectus
          ratione hic consequuntur. Corrupti quam exercitationem porro accusamus
          dolore fuga qui ipsum soluta illo, optio, at excepturi. Facere labore,
          tempore eveniet qui ad impedit optio quis laboriosam a amet odit non
          ipsam adipisci? Possimus officia iste neque doloremque, facere
          voluptate eveniet similique dolorum accusantium praesentium aspernatur
          id. Quidem exercitationem tenetur natus, quas deleniti laudantium
          iusto? Illum, praesentium fugit. Dolorum voluptates sapiente provident
          maxime neque ab at ipsa accusamus voluptate assumenda error animi
          expedita, architecto ullam! Exercitationem laudantium consequatur sit
          porro culpa dignissimos doloremque eos eaque! Ipsam in sit velit
          maxime quisquam, perspiciatis reiciendis expedita autem soluta
          praesentium hic corrupti quod doloribus, quos, fugit accusamus
          voluptatum dicta? Iste molestiae minus quae necessitatibus, illum
          numquam aliquid. Repellat eaque veritatis minus unde cumque, dolores
          repudiandae quia, recusandae reprehenderit ipsam eius harum dolorum
          non ipsum totam id cupiditate corporis laudantium hic laborum
          praesentium. Est voluptatum pariatur hic itaque quisquam suscipit
          eaque vel ea laudantium animi quasi tenetur accusantium dicta repellat
          distinctio sequi maxime recusandae eligendi facilis, nihil laborum
          aperiam quas totam inventore. Ratione, quae natus. Maxime porro ipsa
          unde aliquam facere non aliquid! Rerum accusamus error qui. Omnis ad
          labore error pariatur ducimus sequi vitae consectetur odio provident
          laboriosam voluptatum ipsa tempore earum neque aut, consequatur et
          excepturi quibusdam accusamus sapiente quisquam facere in. Sint,
          dolor. Veritatis nam, rerum, quia officia laudantium quod omnis
          accusamus facere quidem excepturi obcaecati? Accusamus, sint
          veritatis. Ipsum quis temporibus blanditiis unde facere excepturi est
          voluptate eos dolores illum. Harum totam placeat natus aliquam
          tempore, possimus mollitia, aut velit at illo necessitatibus qui a id!
          Consequatur placeat, quos similique iusto non eos maiores perspiciatis
          repellat aliquid excepturi dolore dolor beatae maxime quas iste. Quia
          aspernatur nobis pariatur mollitia unde eveniet, dolores eligendi ad
          tempore quaerat molestiae, magni corrupti natus hic cum nihil earum,
          vitae ratione maiores modi consequuntur. Veritatis, deserunt.
        </p>
      </div>

      <Ratings />

      <Footer />
    </div>
  );
};

export default Room;
