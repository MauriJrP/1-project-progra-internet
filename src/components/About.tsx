import {useState} from "react";

export default function About(): JSX.Element {
    return (
        // About section of a portfolio website with tailwindcss
        <section id="about" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-contain object-center h-full w-full" src="https://i.stack.imgur.com/aH0PJ.png?s=192&g=1" />
                    </div>
                        <h1 className="text-3xl text-white font-medium title-font my-2">Mauricio Rodriguez</h1>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9" />
                                    <path d="M12 12h.01" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-white text-lg">Html</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                <p className="text-base">Html es un lenguaje de marcado que se utiliza para el desarrollo de páginas web en su estructura básica y de contenido.</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                                    <circle cx={6} cy={6} r={3} />
                                    <circle cx={6} cy={18} r={3} />
                                    <path d="M20 4v7a4 4 0 01-4 4H8" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-white text-lg">Css</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                <p className="text-base">Css es un lenguaje que se utiliza para describir la presentación de un documento escrito en un lenguaje de marcado.</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3 text-center sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <path d="M22 4L12 14.01l-3-3" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-white text-lg">Javascript</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                <p className="text-base">Javascript es un lenguaje de programación interpretado. Orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}