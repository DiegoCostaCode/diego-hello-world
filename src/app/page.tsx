import ButtonTier1 from "./components/button/button-tier-1";
import ButtonTier2 from "./components/button/button-tier-2";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-full w-full">

        <div className="flex flex-col justify-start w-[110vh] h-full px-20 bg-soft-black border-x-2 border-dark-gray">

          <section className="flex flex-col items-center justify-end h-[50vh] mb-10 max-w-3xl">

              <div className="flex w-full space-x-5">

                <div className="flex-[10]">
                  <h1 className="text-5xl font-bold drop-shadow-glow">Bem-vindo(a)</h1>
                  
                  <h3 className="text-justify text-lg my-6 text-zinc-300 ">Me chamo <strong className="text-zinc-200">Diego Costa Silva</strong>, um estudante e desenvolvedor full-stack. Atualmente
                    sou estagiário na <strong className="text-zinc-200">Vivo Telefônica</strong>, onde desenvolvo softwares do back ao front-end, focados em melhorar os processos internos.
                  </h3>
                </div>

                <div className="flex justify-center items-center flex-auto drop-shadow-lg">
                  <img src="photo1.png" alt="foto de Diego Costa Silva" className="aspect-square rotate-[-3deg] hover:rotate-3 rounded-2xl w-[250px] transition-all shadow-xl"/>
                </div>
                
              </div>
              
          </section>

          <hr className="border-1 border-dark-gray " />

          <div className="flex flex-col justify-center  h-screen">

            <section className="w-full">
                <h1 className="text-5xl w-95 text-left drop-shadow-glow font-medium">Perfil</h1>

                <p className="text-lg text-justify text-wrap my-6  w-[700px] text-zinc-300">
                  Sou apaixonado pelo que faço, e estou sempre em busca de melhorar. Distribuo ideias, e gosto de ouvir o que os outros têm a dizer,
                  pois acredito que em equipe se constrói mais, e que a comunicação é a chave para o sucesso.
                </p>
           
                <p className="text-lg text-justify text-wrap my-6 text-zinc-300 w-[700px]">
                    Atualmente, estou no último semestre do curso de Análise e Desenvolvimento de Sistemas na 
                    <a href="https://www.fiap.com.br/2012/12/12/fiap-e-classificada-pelo-2-ano-consecutivo-no-grupo-de-excelencia-do-ensino-superior-do-pais-segundo-dados-do-mec/#:~:text=FIAP%20é%20classificada%20pelo%202º,País%2C%20segundo%20dados%20do%20MEC&text=O%20Ministério%20da%20Educação%20(MEC,FIAP%20por%20mais%20essa%20conquista!" className="text-white animate-pulse"> FIAP</a>, com previsão de formatura para agosto deste ano. Minha média de notas até o momento é <strong className="text-white">8,24</strong>.
                </p>

                <p className="text-lg text-justify text-wrap my-6 text-zinc-300 w-[700px]">
                    Tenho experiência em <strong><u>Python</u></strong>, orientada a objetos, análise de dados, AI, Web Scraping e desenvolvimento de APIs com Flask. 
                    <strong><u>Java</u></strong> para criação de APIs, utilizando o <strong><u>Spring boot</u></strong>, <strong><u>JPA</u></strong>, <strong><u>Lombok</u></strong>. 
                    Proficiência em bancos de dados relacionais e não relacionais, criação de modelos na terceira forma normal, e eficientes para fácil extração de dados/relatórios. 
                    No frontend, sou capaz de criar interfaces modernas e intuitivas utilizando <strong><u>Angular</u></strong> e <strong><u>Next.js</u></strong>.
                </p>

            </section>

            <div className="flex space-x-2 mt-10">
              <ButtonTier1 title="Projetos" href="/projetos" />
              <ButtonTier2 title="Trajetória" href="/meet-diego" />
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
