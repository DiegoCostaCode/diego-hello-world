import BounceButton from "./components/button/bounce-button";
import ButtonTier1 from "./components/button/button-tier-1";
import ButtonTier2 from "./components/button/button-tier-2";
import Card from "./components/cards/cards-tier-1";

export default function Home() {
  return (
      <main className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col justify-center items-center w-full max-w-[1100px] h-full px-6 bg-soft-black border-x-2 border-dark-gray">
          <div className="max-w-4xl">
            <section className="flex flex-col items-center justify-center h-[55vh] mt-10 mb-10 max-w-4xl">
              <div className="flex w-full space-x-5 cursor-default">
                <div className="flex-auto">
                  <h1 className="text-5xl font-bold drop-shadow-glow">
                    Bem-vindo(a)</h1>
                  <p className="text-justify text-lg my-6 text-zinc-300">
                    Desenvolvedor full-stack. 2 anos de experiência com projetos acadêmicos em parceria com grandes empresas do mercado, como SAP, Salesforce, OdontoPrev, etc. E, profissionalmente na Vivo Telefônica, desenvolvendo aplicações completas em Python, Flask e frontend com Angular.
                  </p>
                  
                </div>
                <div className="flex flex-auto justify-center items-center drop-shadow-lg">
                  <img
                    src="photo1.png"
                    alt="foto de Diego Costa Silva"
                    className="aspect-square delay-150 rotate-[-3deg] hover:rotate-3 rounded-2xl min-w-[270px] transition-all shadow-xl"
                  />
                </div>
              </div>
            </section>
            
            <hr className="border-1 border-dark-gray" />
            <section className="flex flex-col items h-full mb-52 mt-10">
              <div className="mb-10 cursor-default text-xl text-center">
                <p className=" my-6 w-full text-zinc-300">
                  <u>Sou apaixonado pelo que faço</u> e estou sempre em busco de me aprimorar. Desafios me motivam, e acredito no poder das ideias compartilhadas. Valorizo o trabalho em equipe.
                </p>
                <p className=" my-6 text-zinc-300 w-full">
                  Atualmente, estou no último semestre do curso de Análise e Desenvolvimento de Sistemas na <a href="https://www.fiap.com.br" className="text-sky-500 animate-pulse font-bold">FIAP</a> - bolsa integral,
                   com previsão de formatura para agosto deste ano. Minha média de notas é <strong className="text-white"><u>8,24</u></strong>.
                </p>
              </div>
              <hr className="border-1 border-dark-gray" />
              <div className="mt-10 w-full">
                <h1 id="tecnologia" className="text-4xl w-95 text-center drop-shadow-glow font-medium scroll-mt-[400] mb-10">Tecnologias</h1>
         
                  <div className="flex flex-wrap justify-center gap-6 w-full text-justify my-6 text-zinc-300">
                        <Card 
                        title="🐍Python" 
                        description="Orientado a objetos, criação de API nível REST com Flask, e scripts para automação, threads agendadas, e web scraping. Análise de dados, e A.I."
                        />
                   
                        <Card 
                        title="Java☕" 
                        description="Desenvolvimento de aplicação, API RESTful, com SprinBoot, JPA, Hibernate, Lombok, e camada Hateoas." 
                        />
                 
                 
                        <Card 
                        title="🧾Banco de dados" 
                        description="Modelagem de dados em banco relacionais e não-relacionais, especialmennte Oracle(PL/SQL) e MongoDb. Queries com filtros compostos,
                        procedures, e funcões." 
                        />
          
          
                        <Card 
                        title="Desenvolvimento Web🌐" 
                        description="Criação de interfaces modernas, intuitivas e responsivas. Utilizo frameworks como Angular e Next.js, proficiência em Tailwind, CSS, Type ou Javascript, e uso de componentes reutilizáveis." 
                        />
             
                    
                        <Card 
                        title="🐋Docker & VMs" 
                        description="Criação de dockerfiles, docker-compose, e configuração de VMs para deploy de aplicações."
                        />
             
                  <div className="flex w-full justify-center gap-6 m-10">
                      <ButtonTier1 title="Projetos" href="/projetos" />
                      <ButtonTier2 title="Trajetoria" href="/about" />
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
  );
}

