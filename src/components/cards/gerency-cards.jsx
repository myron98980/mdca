import "../../styles/global.css";

const GerencyCards = ({ link, image, title }) => {
  return (
    <a href={ link } className="w-full h-[220px] mx-auto p-8 flex flex-col items-center justify-center bg-[#fff] [box-shadow:var(--box-shadow)] [border-radius:var(--border-radius)] transition-all duration-300 ease-in-out xl:hover:scale-103">
      <img className='w-[70px] mb-8' src={image} alt={title} />
      <h1 className="text-lg text-center font-medium text-black">{title}</h1>
    </a>
  );
};

export default GerencyCards;