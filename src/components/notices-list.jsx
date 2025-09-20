import React, { useState } from "react";
import NoticesCards from "./cards/notices-cards";

const noticesCardsArray = [
    { link: "/noticias-municipales/apoyo-economico-bella-esperanza", img: "https://www.municerroazul.gob.pe/muni-resources/img/notices/june/BellaEsperanzaReunion.jpg", title: "El Concejo Municipal aprueba el apoyo económico al Club Deportivo Bella Esperanza", date: "Martes, 10 de junio del 2025" },
    { link: "/noticias-municipales/mejoramiento-transitabilidad-cerro-azul", img: "https://www.municerroazul.gob.pe/muni-resources/img/notices/june/CreacionMejoramientoCerroAzul.jpg", title: "Creación y mejoramiento de la Transitabilidad del Cercado de Cerro Azul", date: "Jueves, 12 de junio del 2025" },
    { link: "/noticias-municipales/primera-piedra-cerro-azul", img: "https://www.municerroazul.gob.pe/muni-resources/img/notices/july/01-PrimeraPiedra.jpg", title: "Primera Piedra de la Obra de Transitabilidad en el Cercado de Cerro Azul", date: "Miércoles, 2 de julio del 2025" },
];

export default function NoticesList() {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 8;
    const totalItems = noticesCardsArray.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const itemsToShow = [];
    for (let i = 1; i <= totalPages; i++) {
        const startIndex = Math.max(0, totalItems - i * ITEMS_PER_PAGE);
        const endIndex = totalItems - (i - 1) * ITEMS_PER_PAGE;
        itemsToShow.unshift(noticesCardsArray.slice(startIndex, endIndex));
    }

    const currentItems = itemsToShow[currentPage - 1] || [];

    return (
        <section className="notices">
            <article className="mb-[5rem]">
                <nav aria-label="Page navigation" className="mb-6 flex justify-center">
                    <ul className="inline-flex -space-x-px text-sm">
                        <li>
                            <button
                                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                                className={`px-3 py-2 border rounded-s-lg ${currentPage === 1 ? 'text-gray-400 bg-gray-200 cursor-not-allowed' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}
                                disabled={currentPage === 1}>
                                Anterior
                            </button>
                        </li>

                        {[...Array(totalPages)].map((_, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-3 py-2 border ${currentPage === i + 1 ? '[color:var(--color-azul-claro)] border-gray-300 bg-blue-50' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}>
                                    {i + 1}
                                </button>
                            </li>
                        ))}

                        <li>
                            <button
                                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                                className={`px-3 py-2 border rounded-e-lg ${currentPage === totalPages ? 'text-gray-400 bg-gray-200 cursor-not-allowed' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}
                                disabled={currentPage === totalPages}>
                                Siguiente
                            </button>
                        </li>
                    </ul>
                </nav>
            </article>
            <article class="flex flex-col items-center justify-center gap-4 px-[1.2rem] md:grid md:grid-cols-1 md:px-0 xl:grid-cols-2">
                {noticesCardsArray.map((noticesCardsArray) => (
                    <NoticesCards link={noticesCardsArray.link} img={noticesCardsArray.img} title={noticesCardsArray.title} date={noticesCardsArray.date} />
                ))}
            </article>
        </section>
    );
}