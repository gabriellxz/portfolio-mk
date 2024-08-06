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
                <span className="cursor-pointer hover:text-yellow-500">Iníco</span>
                <span className="cursor-pointer hover:text-yellow-500">Sobre mim</span>
                <span className="cursor-pointer hover:text-yellow-500">Meus trabalhos</span>
                <span className="cursor-pointer hover:text-yellow-500">Fale comigo</span>
            </div>
        </header>
    )
}