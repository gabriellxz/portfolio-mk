export default function Header() {
    return (
        <header className={`
            bg-purpleK-200
            flex justify-between
            p-5 fixed w-full
        `}>
            <div className="text-xl text-white">
                Maria <span className="uppercase text-yellow-500">Kemily</span>
            </div>
            <div className="flex gap-5 text-white">
                <a href="#home" className="cursor-pointer hover:text-yellow-500">Iníco</a>
                <a href="#about" className="cursor-pointer hover:text-yellow-500">Sobre mim</a>
                <a href="#works" className="cursor-pointer hover:text-yellow-500">Meus trabalhos</a>
                <a href="#contactme" className="cursor-pointer hover:text-yellow-500">Fale comigo</a>
            </div>
        </header>
    )
}