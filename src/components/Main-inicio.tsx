import imagePerfil from "../assets/imageMk.png";

export default function MainInicio() {
    return (
        <main className="bg-purpleK-200 h-screen flex flex-col sm:flex-row sm:pt-0 pt-[100px] items-center justify-around" id="home">
            <div className="text-white font-semibold p-5">
                <p className="text-2xl">Olá, meu nome é</p>
                <p className="text-5xl">
                    Maria <span className="text-yellow-500">Kemily</span>,<br />
                    Eu sou desinger <span className="text-yellow-500">&</span> filmaker.
                </p>
            </div>
            <div>
                <img src={imagePerfil} alt="imagem kemily" className="max-w-[500px] w-full"/>
            </div>
        </main>
    )
}