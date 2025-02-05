import BounceButton from "./components/button/bounce-button";
import ButtonTier1 from "./components/button/button-tier-1";
import ButtonTier2 from "./components/button/button-tier-2";
import Card from "./components/cards/cards-tier-1";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full w-full px-6">
      <div className="flex flex-col justify-center items-center w-full max-w-[1100px] h-full bg-soft-black border-x-2 border-dark-gray px-20">

          <header 
            className="flex flex-col items-center justify-center h-[55vh] mt-10 mb-10 "
            role="banner"
          >
            <div className="flex w-full space-x-5 cursor-default">
              <div className="flex-auto">
                <h1 className="text-5xl font-bold drop-shadow-glow">
                  Bem-vindo(a)
                </h1>
                <p className="text-justify text-lg my-6 text-zinc-300">
                  Desenvolvedor full-stack. 2 anos de experiência com projetos acadêmicos em parceria com grandes empresas do mercado, como SAP, Salesforce, OdontoPrev, etc. E, profissionalmente na Vivo Telefônica, desenvolvendo aplicações completas em Python, Flask e frontend com Angular.
                </p>
              </div>
              
              <figure className="flex flex-auto justify-center items-center drop-shadow-lg">
                <img
                  src="photo1.png"
                  alt="Diego Costa Silva - Desenvolvedor Full Stack"
                  className="aspect-square delay-150 rotate-[-3deg] hover:rotate-3 rounded-2xl min-w-[270px] transition-all shadow-xl"
                />
              </figure>
            </div>
          </header>

          <hr className="border-1 border-dark-gray" />

          <section 
            className="flex flex-col items h-full mb-24 mt-10"
            aria-labelledby="sobre-heading"
          >
            <h2 id="sobre-heading" className="sr-only">Sobre mim</h2>
            
            <div className="mb-10 cursor-default text-xl text-center">
              <p className="my-6 w-full text-zinc-300">
                <em>Sou apaixonado pelo que faço</em> e estou sempre em busca de me aprimorar. Desafios me motivam, e acredito no poder das ideias compartilhadas. Valorizo o trabalho em equipe.
              </p>
              <p className="my-6 text-zinc-300 w-full">
                Atualmente, estou no último semestre do curso de Análise e Desenvolvimento de Sistemas na {' '}
                <a 
                  href="https://www.fiap.com.br" 
                  className="text-sky-500 animate-pulse font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FIAP
                </a> - bolsa integral, com previsão de formatura para agosto deste ano. Minha média de notas é {' '}
                <strong className="text-white"><u>8,24</u></strong>.
              </p>
            </div>
            
            <hr className="border-1 border-dark-gray"  />
          </section>
          <section 
            className="mt-10 w-full"
            aria-labelledby="tecnologia-heading"
          >
            <h2 id="tecnologia" className="text-4xl w-95 text-center drop-shadow-glow font-medium scroll-mt-[400] mb-10">
              Tecnologias
            </h2>
            
            <ul className="flex flex-wrap justify-center gap-6 w-full text-justify my-6 text-zinc-300">
              <li className="list-none">
                <Card 
                  title="🐍Python" 
                  description="Orientado a objetos, criação de API nível REST com Flask, e scripts para automação, threads agendadas, e web scraping. Análise de dados, e A.I."
                />
              </li>
              
              <li className="list-none">
                <Card 
                  title="Java☕" 
                  description="Desenvolvimento de aplicação, API RESTful, com SpringBoot, JPA, Hibernate, Lombok, e camada Hateoas." 
                />
              </li>
              
              <li className="list-none">
                <Card 
                  title="🧾Banco de dados" 
                  description="Modelagem de dados em banco relacionais e não-relacionais, especialmente Oracle(PL/SQL) e MongoDB. Queries com filtros compostos, procedures, e funções." 
                />
              </li>
              
              <li className="list-none">
                <Card 
                  title="Desenvolvimento Web🌐" 
                  description="Criação de interfaces modernas, intuitivas e responsivas. Utilizo frameworks como Angular e Next.js, proficiência em Tailwind, CSS, Type ou JavaScript, e uso de componentes reutilizáveis." 
                />
              </li>
              
              <li className="list-none">
                <Card 
                  title="🐋Docker & VMs" 
                  description="Criação de dockerfiles, docker-compose, e configuração de VMs para deploy de aplicações."
                />
              </li>

              <li className="list-none">
                <Card 
                  title="🕵️Pipeline CI/CD" 
                  description="Pipeline de teste, verificação de segurança, e deploy contínuo com Jenkins."
                />
              </li>
            </ul>

         
            <nav 
              className="flex w-full justify-center gap-6 m-10"
              aria-label="Navegação principal"
              role="navigation"
            >
              <ButtonTier1 title="Projetos" href="/projetos" />
              <ButtonTier2 title="Trajetoria" href="/about" />
            </nav>
          </section>
        </div>

    </main>
  );
}