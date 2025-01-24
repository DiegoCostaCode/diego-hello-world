'use client';

import { usePathname } from "next/navigation";

export default function Page() {

  const router = usePathname();

  return (
    <>
      <main className="flex justify-center items-center h-full w-full ">
        <nav className="py-10 fixed top-40 left-14 w-50 h-full">
          <hr className="border-1 border-dark-gray mb-4" />
            <h1 className="text-lg font-bold mb-5">Senta que lá vem história.</h1>
            <ul className="list-disc list-inside text-lg text-zinc-300 ">
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <a href="#introducao" className="hover:text-white ">Eu, Diego🙋‍♂️</a>
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
                  <h1 className="text-5xl font-bold ">Meet Diego Costa</h1>

                  <div className="flex flex-col text-justify text-lg text-zinc-300 space-y-4 mt-4">
                    <p id="introducao" className="scroll-mt-72 hover:leading-loose hover:scale-105 hover:font-medium transition-all">
                      Eu nasci e fui criado aqui em São Paulo - zona sul. Tenho 19 anos, e sou o irmão mais velho. Tenho raízes familiares
                      por parte de pai, em Minas Gerais, e em Pernambuco, por parte de mãe. Dedicação, criatividade, e resiliência são 
                      caracteristicas que me definem desde que me entendo por gente.
                    </p>

                    <p className="hover:leading-loose hover:scale-105 hover:font-medium transition-all">
                      No tempo livre, gosto de caminhar ao ar livre, ouvir uma boa música, assistir filmes e séries e as vezes jogar.
                    </p>

                    <p id="inicio-carreira" className="hover:leading-loose hover:scale-105 hover:font-medium transition-all">
                      Minha carreira teve mudanças importantes. Em 2021, comecei um curso de administração no Instituto Nossa Senhora de Fátima. Neste período
                      mantive uma página no Instagram de ilustração digital <a href="/projetos#vivo" className="text-sky-500 animate-pulse font-bold">(visualizar)</a>. Em 2022, iniciei um curso de inglês de 2 anos na mesma instituição, do básico ao avançado.
                    </p>

                    <p className="hover:leading-loose hover:scale-105 hover:font-medium transition-all">
                       Durante o curso, consegui um estágio como auxiliar administrativo. Foi um período desafiador: era inglês de manhã, estágio no Luz à tarde, e ensino médio à 
                       noite. De um lugar ao outro direto. Mas foi edificante, conquistei muita coisas e aprendi muito.
                    </p>

                    <p id="disney" className="hover:leading-loose hover:scale-105 hover:font-medium transition-all">
                      Em 2023, minha vida mudou: fui contratado como aprendiz na Disney, a maior empresa de entretenimento do mundo. E nesse mesmo ano, conquistei uma 
                      bolsa integral na FIAP com meu desempenho no Enem. Foi um divisor de águas, onde provei minha capacidade e quanndo bati o martelo que iria mudar para
                      T.I.
                    </p>

                    <p id="faculdade" className="hover:leading-loose hover:scale-105 hover:font-medium transition-all">
                      Na FIAP, mergulhei de cabeça nos estudos, pois sempre quis ser um excelente programador e sabia que essa oportunidade era única. Eu sonhava com a FIAP, não iria desperfiçar. Foi onde soube definitivamentne de que era de tecnologia/desenvolvimento que 
                      eu amava fazer. Tive a oportunidade de desenvolvedor projetos com grandes empresas, como SAP, Salesforce, OdontoPrev, etc. <a href="/projetos#fiap" className="text-sky-500 animate-pulse font-bold">(visualizar)</a>
                      </p>

                    <p id="vivo" className="hover:leading-loose hover:scale-105 hover:font-medium transition-all">
                      Em 2024, finalizei meu incrível período na Disney, que me ensinou muito sobre o mundo corporativo, análise de dados, apresentação de resultados, etc. E, ingressei 
                      na Vivo como estagiário, no cargo de desenvolvedor. Trabalhando com backend e frontend, alcançando outro objetivo de ser fullstack e trabalhando em projetos
                      importantes para nossa área <a href="/projetos#vivo" className="text-sky-500 animate-pulse font-bold">(visualizar)</a>.
                    </p>

                    <p id="objetivo" className="hover:leading-loose hover:scale-105 hover:font-medium transition-all">
                      Sou grato pelo caminho percorrido e por ter feito minha transição de carreira dar certo. Agora busco novos horizontes, aprimorar habilidades e, 
                      no futuro, me tornar um grande líder de equipe.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
          </section>

          

        </div>
      </main>
    </>
  );
}
