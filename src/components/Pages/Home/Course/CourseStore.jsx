import './CourseStore.css';

function CourseStore() {

  const listCourseMusic = ["Teclado", "Guitarra", "Baixo", "Violão", "Flauta doce", "Violino", "Ukulele", "Cavaquinho", "Musicalização infantil", "Canto"];

  return (
    <>
      <section className="content__course content__space">
        <h2 className='content__subtitle'>Aulas particulares</h2>
        <p className='content__text'>Atenção, músicos de Pacajus! Chegou a Elkeh Music, a mais nova loja de música da cidade! Aqui você encontra tudo para o seu som, seja você um profissional ou um iniciante apaixonado por música.</p>

        <ul className="menu-list">
          {listCourseMusic.map((course, index) => 
            <li className='menu-item menu-musical'>{course}</li>
          )}
        </ul>

        <ul className='menu-list'>
          <li className='menu-item'>🎸 Vendemos e consertamos instrumentos de qualidade.</li>
          <li className='menu-item'>🎤 Trabalhamos com acessórios diversos: fones, microfones, cabos e muito mais.</li>
          <li className='menu-item'>🎹 Temos guitarras, teclados, pianos, violões e tudo o que você precisa para fazer música acontecer.</li>
          <li className='menu-item'>📚 Oferecemos aulas particulares para crianças a partir de 5 anos e também para adultos que querem aprender.</li>
        </ul>
      </section>
    </>
  )
}

export default CourseStore;