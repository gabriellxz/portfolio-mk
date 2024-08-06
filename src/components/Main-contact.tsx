import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/16/solid";
import instaIcon from "../assets/insta.svg";

export default function MainContact() {
    return (
        <main className="bg-purpleK-100 w-full h-[65vh]">
            <h1 className="text-white text-5xl font-semibold text-center pt-5">Fale <span className="text-yellow-500">Comigo</span></h1>
            <div className="w-full flex justify-around items-center h-[80%]">
                <div className="flex flex-col items-center">
                    <EnvelopeIcon className="w-[100px] text-yellow-500"/>
                    <a href="mailto:mariakemily20@gmail.com" className="text-white font-semibold text-3xl">@Mariakemily</a>
                </div>
                <div className="flex flex-col items-center">
                    <MapPinIcon className="w-[100px] text-yellow-500"/>
                    <a href="" className="text-white font-semibold text-3xl">Ceará - Brasil</a>
                </div>
                <div className="flex flex-col items-center">
                    <img src={instaIcon} alt="" />
                    <a href="https://www.instagram.com/designerkemiily" target="_blank" className="text-white font-semibold text-3xl">designerkemiily</a>
                </div>
            </div>
        </main>
    )
}