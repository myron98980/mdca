import "../../styles/global.css";

const NoticesBody = ({ title, image, date, text }) => {
    return (
        <article className="max-w-3xl mx-auto mt-10 mb-10 px-4 py-10 text-gray-800">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{ title }</h1>
            <img src={ image } alt={ title } className="w-full h-auto rounded-xl mb-6 object-cover" />
            <p className="text-sm text-gray-500 mb-2">{ date }</p>
            <p>{ text }</p>
        </article>
    );
}

export default NoticesBody;