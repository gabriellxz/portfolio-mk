import { ArrowUpIcon } from "@heroicons/react/16/solid";
import instaIcon from "../assets/insta.svg";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-3 justify-center bg-purpleK-200 p-5">
            <p className="text-white">
                © 2024 Todos os direitos reservados: <span className="text-yellow-500">Maria Kemily</span>
            </p>
            <div className="bg-yellow-500 max-w-[400px] w-full p-[1px] rounded-md"></div>
            <a href="https://www.instagram.com/kemilymariia/" target="_blank">
                <img src={instaIcon} alt="" className="w-[50px]" />
            </a>
            <a href="home" className="flex items-center absolute sm:right-[100px] right-[20px] bg-purpleK-100 rounded-full border-2 border-yellow-500">
                <ArrowUpIcon className="w-[50px] text-yellow-500"/>
            </a>
        </footer>
    )
}