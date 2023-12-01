import escolacss from "./EscolaMusi.module.css";

function EscolaMusi(){
    return(
        <div class="conteiner">
            <div className={escolacss.header}>
                <div>
                    <img src="/img/logo.png"/>
                </div>

                <nav className={escolacss.home}>
                    <a href="#sobre">Sobre</a>
                    <a href="#prof">Professores</a>
                    <a href="#aulas">Aulas</a>
                    <a href="#dicanoti">Dicas e notícias</a>
                </nav>


            </div>

            <div class="main">
                <div className={escolacss.escolha}>
                    <div className={escolacss.texto}>
                        <p>Venha aprender com a gente a tocar algum instrumento.</p>
                        <button className={escolacss.saiba}>Saiba mais</button>
                    </div>
                    <div>
                        <button className={escolacss.icone}> <img src="/img/violão.png"/></button>
                    </div>
                    <div>
                        <button className={escolacss.icone}> <img src="/img/teclado.png"/></button>
                    </div>
                    <div>
                        <button className={escolacss.icone}> <img src="/img/guitarra.png"/></button>
                    </div>
                    <div>
                        <button className={escolacss.icone}> <img src="/img/saxonone.png"/></button>
                    </div>
                </div>
                <div id="sobre" className={escolacss.sobreNos}>
                    <div className={escolacss.fundoescola}>
                        <img src="/img/escolaDeMusica.png"/>
                    </div>
                    <div className={escolacss.textoSobre}>
                        <h2>Quem Somos?</h2>
                        <p>Bem-vindo à Escola de Música Música Sinfonia! Somos uma instituição apaixonada
                            por música, dedicada a fornecer educação musical excepcional e inspiradora
                            para pessoas de todas as idades e níveis de habilidade. Com uma longa história
                            de excelência e um compromisso contínuo com a arte da música, estamos aqui para
                            nutrir seu talento musical e ajudá-lo a atingir todo o seu potencial.</p>
                    </div>
                </div>
                <div id="prof" className={escolacss.nossosProfi}>
                    <h2>Nossos profissionais</h2>
                    <div className={escolacss.professores}>
                        <img class="marta"src="/img/ProfMarta.png"/>
                        <p>Aos 50 anos, a Professora Marta Oliveira, experiente flautista e educadora
                            musical, destaca-se por sua abordagem personalizada, combinando técnica sólida
                            e expressão artística. Reconhecida por criar um ambiente acolhedor, ela oferece
                            uma jornada musical enriquecedora adaptada a cada aluno. Seja para iniciantes ou
                            músicos experientes, Marta é a guia ideal para aprimorar habilidades na flauta,
                            proporcionando uma experiência educacional única.</p>
                        <div className={escolacss.setinha}><img src="/img/setinha.png"/></div>
                    </div>

                </div>
                <div className={escolacss.desconto}>
                    <img src="/img/promoPiano.png"/>
                    <div className={escolacss.promo}>
                        <p>Quer ver mais promoção?</p>
                        <button>CLIQUE AQUI PARA SABER MAIS</button>
                    </div>
                </div>
                <div id="aulas" className={escolacss.aulas}>
                    <p>Aulas desmostrativas gratis: </p>
                    <div className={escolacss.videos}>
                        <div>
                            <p>Aula de Teclado</p>
                            <a href="https://www.youtube.com/watch?v=jh8gYNRLD6Y"><img src="/img/AulaDePiano.png"/></a>
                        </div>
                        <div>
                            <p>Aula de Flauta Doce</p>
                            <a href="https://www.youtube.com/watch?v=0t1ScvhGXjk"><img src="/img/flautaDoce.png"/></a>
                        </div>
                        <div>
                            <p>Aula de Guitarra</p>
                            <a href="https://www.youtube.com/watch?v=X3182sxwuuU"><img src="/img/aulaguitarra.png"/></a>
                        </div>
                    </div>
                    <button>Clique aqui para ver mais</button>
                </div>
                <div id="dicanoti">
                    <h2>Aqui vai algumas dicas musicais e notícias da escola</h2>
                    <div className={escolacss.dicaNoti}>
                        <div className={escolacss.dica}>
                            <p>  1-Pratique regularmente.</p>
                            <p>  2-Aprenda a ler partituras.</p>
                            <p>  3-Explore diferentes gêneros musicais.</p>
                            <p>  4-Estude teoria musical.</p>
                            <p>  5-Trabalhe na técnica do seu instrumento.</p>
                            <p>  6-Participe de recitais e concertos.</p>
                            <p>  7-Grave suas performances para avaliação.</p>
                            <p>  8-Busque orientação de professores e mentores.</p>
                            <p>  9-Colabore com outros músicos.</p>
                            <p>  10-Mantenha-se inspirado ouvindo música diversificada.</p>
                            <p>  11-Seja paciente e persistente.</p>
                            <p>  12-Aprenda a ler o público em apresentações ao vivo.</p>
                        </div>
                        <div className={escolacss.noticia}>
                            <div className={escolacss.caixabranca}>
                                <img src="/img/aluna.png"/>
                                <p>Aluna de Musica Sinfonia Recebe Bolsa de Estudos em Prestigiosa
                                    Universidade de Música</p>
                            </div>
                            <div className={escolacss.caixabranca}>
                                <img src="/img/anos10.png"/>
                                <p>Escola de Música Sinfonia Celebra 10 Anos de Sucesso Musical</p>
                            </div>
                            <div className={escolacss.caixabranca}>
                                <img src="/img/caderno.png"/>
                                <p>Musica Sinfonia Lança Programa de Bolsas para Jovens Talentos Musicais</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={escolacss.fotter}>
                <img class={escolacss.logoDois} src="/img/Música%20sinfonia.png"/>
                <div class="img">
                    <img class={escolacss.contato} src="/img/telefone.png"/>
                    <img class={escolacss.contato} src="/img/insta.png"/>
                    <img class={escolacss.contato} src="/img/whats.png"/>
                    <img class={escolacss.contato} src="/img/email.png"/>
                    <img class={escolacss.contato} src="/img/tiktok.png"/>
                </div>
            </div>
        </div>
    )
}

export default EscolaMusi