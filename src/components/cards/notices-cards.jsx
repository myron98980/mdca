import "../../styles/global.css";

const NoticesCards = ({ link, img, title, date }) => {
    return (
        <a href={link} className="w-full h-[400px] md:max-h-[250px] p-3 flex flex-col gap-4 overflow-hidden md:grid md:grid-cols-2 bg-white [border-radius:var(--border-radius)] [box-shadow:var(--box-shadow)] xl:transition-all xl:duration-300 xl:ease-in-out xl:hover:scale-103">
            <div className="notices-img w-full h-full overflow-hidden rounded-[20px]">
                <img className="w-full h-full object-cover object-center" 
                src={img} alt={title} />
            </div>

            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left gap-2">
                <h1 className="text-xl font-semibold text-black mb-2">{title}</h1>
                <p className="notices-text-date text-sm font-normal text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Z" />
                    </svg>
                    {date}
                </p>
            </div>
        </a>
    );
}

export default NoticesCards;
