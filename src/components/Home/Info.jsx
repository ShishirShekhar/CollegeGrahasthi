import Button from "../Button";

const Info = (props) => {
  return (
    <div className={`min-h-screen text-black px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center ${props.left ? "" : "flex-row-reverse"}`}>
      <div className="flex justify-center sm:w-1/2">
        <img src={props.img} alt="College Grahasthi" className="shadow-2xl rounded-xl max-w-full h-auto" />
      </div>

      <div className="sm:w-1/2 sm:pl-8 lg:pl-16">
        <div className="w-24 h-2 bg-gradient-to-r from-secondary to-primary mb-5 sm:mb-0"></div>
        <h1 className="text-5xl font-semibold pt-5">{props.title}</h1>
        <p className="text-gray-300 text-lg font-semibold tracking-wider py-8">{props.content}</p>

        {props.button && (
          <div className="flex items-center">
            <div className="mr-4">
              <Button value={props.button} to="/other" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
