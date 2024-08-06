import imagePerfil from "../assets/imageMk.png";

export default function MainInicio() {
    return (
        <main className="bg-purpleK-200 h-screen flex items-center justify-around">
            <div className="text-white font-semibold">
                <p className="text-2xl">Olá, meu nome é</p>
                <p className="text-5xl">
                    Maria <span className="text-yellow-500">Kemily</span>,<br />
                    Eu sou desinger <span className="text-yellow-500">&</span> filmaker.
                </p>
            </div>
            <div>
                <img src={imagePerfil} alt="imagem kemily"/>
            </div>
        </main>
    )
}