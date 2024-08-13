export default function MainAbout() {
    return (
        <main className="bg-purpleK-100 w-full h-screen flex flex-col sm:flex-row justify-around items-center" id="about">
            <div className="p-5">
                <h1 className="text-5xl text-white font-semibold">Sobre <span className="text-yellow-500">Mim</span></h1>
                <div className="pt-5 max-w-[800px] w-full">
                    <p className="text-justify text-white text-xl">
                        Tenho 17 anos, moro em Redenção-CE e estou cursando informática na escola Adoldo Ferreira de Sousa. Meu interesse por design gráfico, captação de vídeo e imagens, e criação de conteúdo para redes sociais surgiu através do curso. Atualmente, também estou fazendo um curso de Marketing Digital oferecido pela escola, onde estou expandindo minhas habilidades e explorando novas formas de comunicação visual.
                    </p>
                </div>
            </div>
            <div className="md:flex hidden items-center gap-5 p-5">
                <div className="h-[300px] w-[70px] rounded-full p-5 bg-yellow-500"></div>
                <div className="h-[250px] w-[70px] rounded-full p-5 bg-purpleK-100 border-2 border-yellow-500"></div>
                <div className="h-[200px] w-[70px] rounded-full p-5 bg-yellow-500"></div>
                <div className="h-[150px] w-[70px] rounded-full p-5 bg-purpleK-100 border-2 border-yellow-500"></div>
            </div>
        </main>
    )
}