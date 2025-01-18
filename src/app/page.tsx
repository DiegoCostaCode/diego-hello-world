
export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen">

        <section className="flex items-center">
          <div className="pr-5">
            <img src="/photo1.png" alt="Foto Diego Costa" className="rotate-[-3deg] hover:rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 w-[300px] transition-all shadow-xl" />
          </div>

          <div>
            <h1 className="text-6xl drop-shadow-glow">Bem-vindo(a)!</h1>
          </div>
        </section>

        <article className="mt-[30px] text-justify w-[700px] text-[#a1a1aa]" >
          <p >
            Estudante e desenvolvedor full-stack, ou seja, auto tanto no backend, quanto no frontend. Curso Análise e Desenvolvimento de Sistemas na <a href="https://www.fiap.com.br/institucional/" className="font-bold text-[#fefefe] drop-shadow-glow">FIAP</a> -
            bolsa integral. E, estou no último semestre, termino este ano de 2025, Agosto. <a className="font-bold text-[#fefefe] drop-shadow-glow ">Sou uma pessoa dedicada, criativa e comunicativa.</a>
            
          </p>

          <p>
              Tenho conhecimento e experiência com Python com Flask e Pandas, Matplotlib e entre outras libs. Também, em  Java, com Spring bott, JPA e Hibernate PL/SQL.
              Além de modelagem de banco de dados relacionais e não relacionais. Me sinto muito à vontade com frontend, foi o que me trouxe para área de T.I, e posteiormente peguei gosto pelo restante das coisa.
              Desenvolvo em Next.js ou Angular, gosto de utilizar TailwindCss.
          </p>

          <p>
              Atualmente faço um estágio na Vivo, maior operadora de internet no Brasil. Faço parte de um time de desenvolvimento de projetos internos, automações que vão do backend ao frontend.
              Utilizamos Python (OOP), MongoDb ou MySql para banco de dados, e Angular para frontend. Em 2023, já colaborei com a maior empresa de entretenimento do mundo, a Disney, porém em Administração.
              Entretanto, foi um experiência incrível, e que me trouxe muitos aprendizados, como: Análise de Dados, Apresentação de dados em reuniões, Organização e Senso de urgência.
  
          </p>

        </article>

      </main>
    </>
  );
}
