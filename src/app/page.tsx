
export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen bg-[#] ">
        <div className="mt-[150px] mb-[150px]">
          <section className="flex items-center h-[500px]">
          <div className="pr-5">
            <img 
              src="/photo1.png" alt="Foto Diego Costa" className=" rotate-[-3deg] hover:rotate-3 rounded-2xl w-[300px] transition-all shadow-xl" />

              <p className="shadow-xl w-[300px] text-[15px] mt-2.5 animate-bounce" >
                <a href="https://www.youtube.com/watch?v=_ksnxNfrKrw">
                <strong>"No force of nature can break your will to self motivate"</strong> ~Michael Jackson
                </a>
              </p>
          </div>

            <div>
              <h1 className="text-6xl drop-shadow-glow">Bem-vindo(a)!</h1>
            </div>
          </section>

          <article className=" text-justify w-[700px] text-[#a1a1aa] text-base " >
          <p>
            <strong>Estudante e desenvolvedor full-stack</strong> cursando Análise e Desenvolvimento de Sistemas na 
            <a href="https://www.fiap.com.br/institucional/" className="font-bold text-[#fefefe] drop-shadow-glow"> FIAP </a> 
            (bolsa integral) – último semestre, concluindo em agosto.
          </p>

          <p className="mt-7">
            <strong className=" text-[#fefefe] drop-shadow-glow">Sou dedicado, criativo e comunicativo</strong>, com experiência em <strong className=" text-[#fefefe] drop-shadow-glow">Python</strong> (Flask, Pandas, Matplotlib, etc.), 
            <strong className=" text-[#fefefe] drop-shadow-glow">Java</strong> (Spring Boot, JPA, Lombok, etc.). Também tenho conhecimento sólido em <strong className=" text-[#fefefe] drop-shadow-glow">bancos relacionais (PL/SQL) e não relacionais</strong>. 
            Comecei no front, minha porta de entrada na TI, e é meu lugar de paz, adoro criar interfaces minimalistas, intuitivas, com <strong className=" text-[#fefefe] drop-shadow-glow">Next.js, Angular, TailwindCSS, e até CSS puro.</strong>
          </p>

          <p className="mt-7">
            Atualmente, estou estagiando na Vivo, desenvolvendo soluções internas de ponta a ponta: backend em Python, bancos 
            (MongoDB/MySQL) e frontend em Angular. Em 2023, tive o privilégio de trabalhar na The Walt Disney Company – uma experiência enriquecedora 
            que me ensinou análise de dados, apresentações e senso de urgência.
          </p>


          </article>
        </div>
      </main>
    </>
  );
}
