'use client';

import clsx from "clsx";
import { useState } from "react";

export default function Page() {

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <main className="flex justify-center items-center h-full w-full ">
        <nav className="py-10 fixed top-40 left-14 w-50 h-full">
          <hr className="border-1 border-dark-gray mb-4" />
            <h1 className="text-lg font-bold mb-5">Senta que lá vem história.</h1>
            <ul className="list-disc list-inside text-lg text-zinc-300 ">
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <button onClick={() => handleSectionClick("introducao")} className="hover:text-white" >Eu, Diego🙋‍♂️</button>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <button onClick={() => handleSectionClick("inicio-carreira")} className="hover:text-white" >Início da Carreira📍</button>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <button onClick={() => handleSectionClick("disney")} className="hover:text-white" >Disney🏰🐭</button>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <button onClick={() => handleSectionClick("tecnologias")} className="hover:text-white" >Faculdade e Aprendizado💻</button>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <button onClick={() => handleSectionClick("vivo")} className="hover:text-white" >Estágio na Vivo👾</button>
              </li>
              <li className="hover:-translate-x-[-1rem] hover:scale-110  transition-all delay-200">
                <button onClick={() => handleSectionClick("conclusao")} className="hover:text-white" >Objetivo Pessoal🚀</button>
              </li>
            </ul>
          <hr className="border-1 border-dark-gray mt-4" />
        </nav>

        <div className="flex flex-col w-[110vh] h-auto px-20 bg-soft-black border-x-2 border-dark-gray scroll-smooth">

          <section className="flex flex-col items-center justify-end h-auto mb-10 max-w-3xl">

            <div className="flex flex-col w-full space-x-5">

              <div className="flex flex-col justify-center items-center my-56">

                <div className="flex-[10]">
                  <h1 className="text-5xl font-bold drop-shadow-glow">Meet Diego Costa</h1>

                  <div className="flex flex-col text-justify text-lg text-zinc-300 space-y-4 mt-4">

                    <p id="introducao" className={clsx(" hover:leading-loose hover:scale-105 hover:font-medium transition-all", activeSection === 'introducao' && 'animate-blink-once')}>
                      Nasci e cresci na zona sul de São Paulo. Sou uma pessoa tranquila, focada em meus objetivos e apaixonado por aprender
                      coisas novas. Desde cedo, a tecnologia despertava minha curiosidade, e sempre quis entender como as coisas funcionam. 
                      Nos meus momentos livres, gosto de caminhar ao ar livre, ouvir uma boa música, assistir a filmes ou séries e, às vezes,
                      mergulhar em uma leitura.
                    </p>

                    <p id="inicio-carreira" className={clsx(" hover:leading-loose hover:scale-105 hover:font-medium transition-all", activeSection === 'inicio-carreira' && 'animate-blink-once ')}>
                      <strong>Minha jornada não começou na T.I</strong>. Em 2021, iniciei um curso técnico em Administração e 
                      trabalhei como freelancer de ilustrações digitais <a href="https://www.instagram.com/firtz_dzn/" className="text-sky-500 animate-pulse font-bold">(visualizar)</a>  - uma experiência muito marcante. No ano seguinte, concluí um curso completo de inglês na mesma instituição, 
                      do básico ao avançado, enquanto começava a explorar o universo do Frontend. Algo me dizia que era o caminho certo.
                    </p>

                    <p id="disney" className={clsx("hover:leading-loose hover:scale-105 hover:font-medium transition-all", activeSection === 'disney' && 'animate-blink-once ')}>
                      Em 2023, fui contratado como Aprendiz na <a href="https://www.linkedin.com/feed/update/urn:li:activity:7060409859858472960/?originalSubdomain=pt" className="text-sky-500 animate-pulse font-bold">The Walt Disney Company</a>. Não era ainda na área de tecnologia, mas foi um período transformador. 
                      Aprendi sobre análise de dados, apresentação de resultados e o funcionamento do mundo corporativo. Pouco tempo depois, consegui uma bolsa 
                      de estudos na FIAP em Análise e Desenvolvimento de Sistemas, graças às minhas notas no Enem. E foi aí que mergulhei de cabeça em programação.
                    </p>

                    <p id="tecnologias" className={clsx(" hover:leading-loose hover:scale-105 hover:font-medium transition-all", activeSection === 'tecnologias' && 'animate-blink-once ')}>
                      Desenvolvi aplicações completas desde o início do curso, enfrentando desafios reais propostos por empresas como <strong><u>SAP, Salesforce, Odontoprev, entre outras</u></strong>. Aprendi a criar 
                      APIs RESTful com Java e Spring Boot, desenvolver aplicativos em Kotlin e automatizar processos com Python. Trabalhei com banco de dados Oracle, 
                      criei projetos web com Next.js e explorei metodologias ágeis, Docker e Azure. Foi um período desafiador, mas gratificante, que confirmou que estava 
                      no caminho certo.
                    </p>

                    <p id="vivo" className={clsx("hover:leading-loose hover:scale-105 hover:font-medium transition-all", activeSection === 'vivo' && 'animate-blink-once ')}>
                      Após meu período na Disney, comecei a estagiar na <a href="https://www.linkedin.com/feed/update/urn:li:activity:7236387467707199488/" className="text-sky-500 animate-pulse font-bold">Vivo Telefônica</a>, onde pude aplicar tudo o que aprendi. Estou trabalhando em projetos significativos, como o 
                      de Controle de KPI, para monitoramento de rede, encontro de inconcistências no sistema, e automatização de processos. E outro de Yellow Belt, atuando
                      na criação de um pipeline de deploy, utilizando as ferramentas do Git e Jenkins.
                    </p>

                    <p id="conclusao" className={clsx("hover:leading-loose hover:scale-105 hover:font-medium transition-all", activeSection === 'conclusao' && 'animate-blink-once ')}>
                      Resiliência, dedicação e foco são os pilares da minha trajetória. Sou grato por tudo o que conquistei até aqui e ansioso para continuar 
                      crescendo, aprimorando minhas habilidades e, no futuro, me tornar um grande líder de equipe.
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


