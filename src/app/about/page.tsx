'use client';

import { usePathname } from "next/navigation";

export default function Page() {

  const router = usePathname();

  return (
    <>
      <main className="flex justify-center items-center h-full w-full">

      

        <nav className="py-10 fixed top-40 left-14 w-50 h-full">
          <hr className="border-1 border-dark-gray mb-4" />
            <h1 className="text-lg font-bold mb-5">Senta que lá vem história.</h1>
            <ul className="list-disc list-inside text-lg text-zinc-300">
              <li>
                <a href="#introducao" className="hover:text-white">Eu, Diego🙋‍♂️</a>
              </li>
              <li>
                <a href="#inicio-carreira" className="hover:text-white">Início da Carreira📍</a>
              </li>
              <li>
                <a href="#disney" className="hover:text-white">Disney🏰🐭</a>
              </li>
              <li>
                <a href="#faculdade" className="hover:text-white">Faculdade e Aprendizado💻</a>
              </li>
              <li>
                <a href="#vivo" className="hover:text-white">Estágio na Vivo👾</a>
              </li>
              <li>
                <a href="#objetivo" className="hover:text-white">Objetivo Pessoal🚀</a>
              </li>
            </ul>
          <hr className="border-1 border-dark-gray mt-4" />
        </nav>

        <div className="flex flex-col w-[110vh] h-auto px-20 bg-soft-black border-x-2 border-dark-gray scroll-smooth">

          <section className="flex flex-col items-center justify-end h-auto mb-10 max-w-3xl">

            <div className="flex flex-col w-full space-x-5">

              <div className="flex flex-col justify-center items-center my-20">

                <div className="flex-[10]">
                  <h1 className="text-5xl font-bold ">Meet Diego Costa</h1>

                  <p id="introducao" className="text-justify text-lg my-6 text-zinc-300 scroll-mt-72">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum sequi nam laboriosam cumque esse vel cum. Explicabo ipsum nobis ipsam ad, nemo atque quas distinctio magnam ipsa minima dignissimos quisquam!
                  </p>

                  <p className="text-justify text-lg my-6 text-zinc-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, atque vero impedit reiciendis optio aliquam, nemo eaque, iure enim itaque asperiores earum distinctio ut tempora eos quas similique laborum libero?
                  </p>

                  <p id="inicio-carreira" className="text-justify text-lg my-6 text-zinc-300 scroll-mt-64">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti, vitae eaque delectus, consequuntur consectetur tempora reprehenderit natus porro exercitationem temporibus, dolorem impedit voluptatem? Recusandae officia quas quam sapiente qui!  
                  </p>

                  <p className="text-justify text-lg my-6 text-zinc-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, maiores eveniet. Quas quisquam, sapiente excepturi laudantium odio magni tenetur aliquid et explicabo, ipsa ab nam ipsum recusandae eligendi nobis nulla. 
                  </p>

                  <p id="disney" className="text-justify text-lg my-6 text-zinc-300 scroll-mt-64">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quo iste, atque consequatur repellat amet reiciendis, cumque commodi dolor eum cum aliquam quis ex at itaque suscipit consectetur magnam maxime!  
                  </p>

                  <p id="faculdade" className="text-justify text-lg my-6 text-zinc-300 scroll-mt-72">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, perspiciatis! Facere pariatur deserunt officiis itaque fuga aliquam, officia assumenda deleniti quis eaque voluptatum fugiat impedit reprehenderit alias saepe consequuntur dolores?
                  </p>

                  <p id="vivo" className="text-justify text-lg my-6 text-zinc-300 scroll-mt-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur suscipit inventore totam assumenda aspernatur. Ex soluta odio, vitae nisi natus ut quia est cupiditate quibusdam fuga eveniet ducimus! Consequuntur.  
                  </p>

                  <p id="objetivo" className="text-justify text-lg my-6 text-zinc-300 scroll-mt-96">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia fugiat vero reiciendis. Rem commodi provident neque blanditiis minus reprehenderit ipsum, repellendus ratione ab in omnis, praesentium assumenda iusto, dolorem accusamus.
                  </p>
                </div>

              </div>
            </div>
            
          </section>

          

        </div>
      </main>
    </>
  );
}
