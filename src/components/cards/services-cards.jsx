import "../../styles/global.css";

const ServicesCards = ({ image, title, description }) => {
    return (
        <div className="w-full h-[220px] mx-auto p-8 flex flex-col items-center justify-center bg-[#fff] [box-shadow:var(--box-shadow)] [border-radius:var(--border-radius)] transition-all duration-300 ease-in-out xl:hover:scale-103">
            <img className='w-[70px] mt-6 mb-2' src={ image } alt={ title } />
            <h2 className="text-lg text-center font-medium text-black my-2">{ title }</h2>
            <p className="text-md text-center font-light text-black mb-5">{ description }</p>
        </div>
    );
};

export default ServicesCards;