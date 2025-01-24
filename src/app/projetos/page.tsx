'use client';

import { usePathname } from "next/navigation";

export default function Page() {

  const router = usePathname();

  return (
    <>
      <main className="flex justify-center items-center h-full w-full">

        <nav className="py-10 fixed top-40 left-14 w-50 h-full">
          <hr className="border-1 border-dark-gray mb-4" />
            <ul className="list-disc list-inside text-lg text-zinc-300 ">
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <a href="#vivo" className="hover:text-white ">Projeto na Vivo</a>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <a href="#inicio-carreira" className="hover:text-white">Início da Carreira📍</a>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <a href="#disney" className="hover:text-white">Disney🏰🐭</a>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <a href="#faculdade" className="hover:text-white">Faculdade e Aprendizado💻</a>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <a href="#vivo" className="hover:text-white">Estágio na Vivo👾</a>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
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
                  <h1 className="text-5xl font-bold ">Vivo - Controle de Kpi</h1>

                    <p>
                        Este é um projeto crítico no qual estive profundamente envolvido desde agosto de 2023, realizando entregas contínuas. O objetivo principal era 
                        criar um sistema end-to-end que facilitasse o monitoramento de KPIs relacionados aos hardwares de rede, além de automatizar processos que 
                        ajudam a conter os desvios desses KPIs.
                    </p>
                    <p>
                        Conseguimos reduzir o tempo de uma atividade que anteriormente levava 1 dia inteiro para, no máximo, 1 hora. Isso aumentou significativamente 
                        a produtividade e eficiência do time, além de tornar mais rápido e prático identificar problemas e corrigi-los antes que impactem os resultados 
                        e nossos clientes.
                    </p>
                   
                    <h3 className="text-lg font-bold">Minha contribuição</h3>
                    
                    <ul>
                        <li>
                        <strong>Backend:</strong> Desenvolvi uma API REST em Python utilizando Flask, com implementação de threads agendadas para consulta e 
                        atualização de dados de forma automática e eficiente. Incluí também técnicas de web scraping usando Playwright para coleta de informações. Banco
                        de dados MongoDb.
                        </li>
                        <li>
                        <strong>Frontend:</strong> Implementei uma interface intuitiva e fácil de utilizar, com grande foco no hands-off, e moderna utilizando Angular. 
                            Criei componentes reutilizáveis para aumentar a escalabilidade e a eficiência do desenvolvimento.
                        </li>
                    </ul>
                    <p>
                        O projeto resultou em um aumento significativo na confiabilidade do sistema e reduziu drasticamente o tempo necessário para a identificação e resolução 
                        de problemas, contribuindo para um monitoramento mais eficiente dos KPIs críticos.
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
