import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Projects, projetosArray } from "../constants/projects";
import StarIcon from "../svg/icon-star";

export default function MainProjects() {
    return (
        <main className="w-full h-screen bg-purpleK-200 pt-[100px]">
            <h1 className="text-white text-5xl font-semibold text-center">Meus <span className="text-yellow-500">Trabalhos</span></h1>
            <div className="flex w-full justify-center pt-[100px] px-5">
                <div className="flex w-full gap-5 overflow-x-scroll p-5 scrollbar-thin scrollbar-thumb-purpleK-100 scrollbar-track-purpleK-200 scroll">
                    {
                        projetosArray.map((item: Projects) => (
                            <div key={item.nome} className="bg-purpleK-100 max-w-[250px] h-[250px] min-w-[250px] rounded-lg p-5">
                                <div className="flex justify-center text-yellow-500">
                                    <StarIcon />
                                </div>
                                <div className="flex flex-col gap-5 items-center text-2xl text-white font-semibold pt-5">
                                    <span className="w-full text-center rounded-md">{item.nome}</span>
                                    <a href={item.link} target="_blank" className="bg-purpleK-200 w-full rounded-md flex justify-center items-center gap-5">
                                        Detalhes <ArrowRightIcon className="w-5 text-yellow-500" />
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}
