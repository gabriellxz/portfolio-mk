import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/16/solid";
import instaIcon from "../assets/insta.svg";

export default function MainContact() {
    return (
        <main className="bg-purpleK-100 w-full flex flex-col justify-center h-[80vh] sm:h-[65vh]" id="contactme">
            <h1 className="text-white text-5xl font-semibold text-center pt-5">Fale <span className="text-yellow-500">Comigo</span></h1>
            <div className="w-full flex flex-col gap-[50px] sm:flex-row sm:justify-around sm:items-center h-[80%]">
                <div className="flex flex-col items-center">
                    <EnvelopeIcon className="w-[100px] text-yellow-500"/>
                    <a href="mailto:mariakemily20@gmail.com" className="text-white font-semibold text-3xl">@Mariakemily</a>
                </div>
                <div className="flex flex-col items-center">
                    <MapPinIcon className="w-[100px] text-yellow-500"/>
                    <a href="https://www.google.com/maps/place/Reden%C3%A7%C3%A3o+-+CE/@-4.2627099,-38.9339037,11z/data=!3m1!4b1!4m6!3m5!1s0x7bf35e51dca8f4f:0x195316fb538e2150!8m2!3d-4.2238924!4d-38.730315!16s%2Fm%2F09rxf8p?entry=ttu" target="_blank" className="text-white font-semibold text-3xl">Ceará - Brasil</a>
                </div>
                <div className="flex flex-col items-center">
                    <img src={instaIcon} alt=""/>
                    <a href="https://www.instagram.com/designerkemiily" target="_blank" className="text-white font-semibold text-3xl">designerkemiily</a>
                </div>
            </div>
        </main>
    )
}