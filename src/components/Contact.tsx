import {useState} from "react";

export default function Contact(): JSX.Element {
    return (
        <section className="bg-gray-800 text-white" id="contact">
            <div className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center">Contacto</h2>
                <p className="mt-8 text-center text-gray-400 text-lg">Si tienes alguna duda o quieres contactarme, puedes hacerlo a través de mis redes sociales o enviándome un correo electrónico.</p>
                <div className="flex flex-wrap mt-10 justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:mb-0 mb-12">
                        <div className="px-6">
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">Mauricio Rodriguez</h5>
                                <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">Desarrollador Web</p>
                                <div className="mt-6">
                                    <button className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-dribbble"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
