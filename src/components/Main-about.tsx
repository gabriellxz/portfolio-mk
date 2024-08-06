export default function MainAbout() {
    return (
        <main className="bg-purpleK-100 w-full h-screen flex justify-around items-center">
            <div>
                <h1 className="text-5xl text-white font-semibold">Sobre <span className="text-yellow-500">Mim</span></h1>
                <div className="pt-5 max-w-[800px] w-full">
                    <p className="text-justify text-white text-xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus voluptatem numquam quos, modi aspernatur ex hic asperiores aperiam obcaecati atque adipisci dolor consectetur a at, porro sequi voluptate. Sapiente, quia. Lorem ipsum dolor sit amet, <span className="text-yellow-500">consectetur adipisicing elit</span>. Dolorum suscipit necessitatibus eligendi deserunt culpa veritatis ab at tenetur? Consequuntur deleniti ipsa dolorum perspiciatis. Maiores, mollitia optio! <span className="text-yellow-500">consectetur adipisicing elit</span>. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident porro facere laboriosam repellat commodi? Dignissimos, minus repellendus. <span className="text-yellow-500">consectetur adipisicing elit </span>, optio aut aliquam sequi.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="h-[300px] w-[70px] rounded-full p-5 bg-yellow-500"></div>
                <div className="h-[250px] w-[70px] rounded-full p-5 bg-purpleK-100 border-2 border-yellow-500"></div>
                <div className="h-[200px] w-[70px] rounded-full p-5 bg-yellow-500"></div>
                <div className="h-[150px] w-[70px] rounded-full p-5 bg-purpleK-100 border-2 border-yellow-500"></div>
            </div>
        </main>
    )
}