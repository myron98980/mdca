import "../../styles/global.css";

const OfficialsCards = ({ image, alt, nameOffice, nameOfficial, emailPersonal, emailOffice1, emailOffice2 }) => {
    return (
        <div className="w-full h-[370px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white p-6 text-center">
            <div className="flex justify-center mb-4">
                <img className="rounded-full w-24 h-24 object-cover border-2 [border-color:var(--color-azul-claro)]"
                    src={image} alt={alt} />
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-800">{nameOffice}</h3>
                <p className="text-sm [color:var(--color-azul-claro)] font-medium mt-1">{nameOfficial}</p>
            </div>

            <div className="mt-4 text-left text-sm">
                <p className="font-semibold text-gray-700 mb-1 flex items-center">📧 Correo Institucional:</p>
                <p className="text-gray-600 break-all ml-4 mb-2"><a href={`mailto:${emailPersonal}`}>{emailPersonal}</a></p>
                <p className="font-semibold text-gray-700 mb-1 flex items-center">🏢 Correo de Oficina:</p>
                <ul className="ml-4 text-gray-600 space-y-1">
                    <li><a href={`mailto:${emailOffice1}`}>{emailOffice1}</a></li>
                    <li><a href={`mailto:${emailOffice2}`}>{emailOffice2}</a></li>
                </ul>
            </div>
        </div>
    );
}

export default OfficialsCards;