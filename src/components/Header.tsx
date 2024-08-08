import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {

    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (open) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [open]);

    return (
        <>
            <header className={`
            bg-purpleK-200
            justify-between
            p-5 fixed w-full hidden sm:flex
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
            <header className="flex justify-between sm:hidden right-1 bg-purpleK-200">
                <div className="text-xl text-white">
                    Maria <span className="uppercase text-yellow-500">Kemily</span>
                </div>
                <div className="flex absolute right-1">
                    <div onClick={() => setOpen(!open)}>
                        <Bars3Icon className="text-yellow-500 w-[30px]" />
                    </div>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed inset-0 bg-purpleK-200 flex flex-col gap-5 p-8 text-white"
                        >
                            <div className="absolute top-4 right-4" onClick={() => setOpen(false)}>
                                <XMarkIcon className="text-yellow-500 w-[30px] cursor-pointer" />
                            </div>
                            <a href="#home" className="cursor-pointer hover:text-yellow-500">Início</a>
                            <a href="#about" className="cursor-pointer hover:text-yellow-500">Sobre mim</a>
                            <a href="#works" className="cursor-pointer hover:text-yellow-500">Meus trabalhos</a>
                            <a href="#contactme" className="cursor-pointer hover:text-yellow-500">Fale comigo</a>
                        </motion.div>
                    )}
                </div>
            </header>
        </>
    )
}