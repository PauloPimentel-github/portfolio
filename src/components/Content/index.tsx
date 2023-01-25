import { Container, Sidebar, Box } from "./styles";

import { Icon } from "../Icon/Icon";

export function Content() {
    return (
        <Container>
            <Sidebar>
                <header>
                    <Box> 
                        <div className="box_item text_center">
                            <img src="https://avatars.githubusercontent.com/u/25647587?s=400&u=d93ca99d38eff7fe3f52f1f5a0ccbab395668098&v=4"
                                alt="[Imagem Perfil]"
                                title="Imagem Perfil" />
                        </div>
                        <div className="box_item text_center">
                            <h1>Paulo H.G Pimentel</h1>
                            <p>Full Stack Developer</p> 
                        </div>
                    </Box>
                    <Box>
                        <nav className="box_item">
                            <ul className="menu">
                                <li>
                                    <Icon name="map-pin" color="none" />
                                    <span title="Brasil">Brasil</span>
                                </li>
                                <li>
                                    <Icon name="briefcase" color="none" />
                                    <span title="Unicid">Unicid</span>
                                </li>
                                <li>
                                    <Icon name="github" color="none" />
                                    <a href="https://github.com/PauloPimentel-github" title="GitHub" target="_blank" rel="noreferrer">
                                        PauloPimentel-github
                                    </a>
                                </li>
                                <li>
                                    <Icon name="linkedin" color="none" />
                                    <a href="https://www.linkedin.com/in/paulo-pimentel-1a9733124/" title="Linkedin" target="_blank" rel="noreferrer">
                                        paulo-pimentel
                                    </a>
                                </li>
                                <li>
                                    <Icon name="globe" color="none" />
                                    <a href="https://paulohgpimentel.com.br" title="Website" target="_blank" rel="noreferrer">
                                        https://paulohgpimentel.com.br
                                    </a>
                                </li>
                                <li>
                                    <Icon name="mail" color="none" />
                                    <span title="E-mail"> 
                                        paulo.h.g.pimentel@gmail.com
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </Box>
                </header>
                <section>
                    <Box>
                        <article className="box_item tecnologias">
                            <h2>Tecnologias</h2>

                            <div>
                                <button>HTML5</button>
                                <button>CSS3</button>
                                <button>Javascript</button>
                            </div>
                            <div>
                                <button>Typescript</button>
                                <button>Angular</button>
                                <button>ReactJS</button>
                            </div>
                            <div>
                                <button>NodeJS</button>
                                <button>PHP</button>
                                <button>Java</button>
                            </div>
                            <div>
                                <button>C#</button>
                                <button>GIT</button>
                                <button>GitHub</button>
                            </div>
                            <div>
                                <button>MySQL</button>
                                <button>PostgreSQL</button>
                                <button>Oracle</button>
                            </div>
                        </article>
                    </Box>
                    <Box>
                        <article className="box_item experiencias">
                            <h2>Experiências</h2>

                            <div>
                                <span>.</span>
                                <h4>Cruzeiro do Sul (Unicid)</h4>
                                <span></span>
                                <p className="data">2018 - Atualmente</p>
                                <span></span>
                                <p className="cargo">Full Stack Developer</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Naville Brasil</h4>
                                <span></span>
                                <p className="data">2018 - 2018</p>
                                <span></span>
                                <p className="cargo">Programador Web</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Rasgueira Bar</h4>
                                <span></span>
                                <p className="data">2006 - 2016</p>
                                <span></span>
                                <p className="cargo">Barman</p>
                            </div>
                        </article>
                    </Box>
                    <Box>
                        <article className="box_item experiencias">
                            <h2>Educação</h2>

                            <div>
                                <span>.</span>
                                <h4>Universidade Cruzeiro do Sul</h4>
                                <span></span>
                                <p className="data">Graduado em 2021</p>   
                                <span></span>
                                <p className="cargo">Ciência da Computação</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Rocketseat</h4>
                                <span></span>
                                <p className="data">Cursando</p>
                                <span></span>
                                <p className="cargo">Ignite</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Algaworks</h4>
                                <span></span>
                                <p className="data">Cursando</p>
                                <span></span>
                                <p className="cargo">Especialista Spring Rest</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Algaworks</h4>
                                <span></span>
                                <p className="data">Completo - 2020</p>
                                <span></span>
                                <p className="cargo">FullStack Angular e Spring</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Algaworks</h4>
                                <span></span>
                                <p className="data">Completo - 2020</p>
                                <span></span>
                                <p className="cargo">TDD Essencial</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Upinside</h4>
                                <span></span>
                                <p className="data">Completo - 2021</p>
                                <span></span>
                                <p className="cargo">Full Stack PHP Developer</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Upinside</h4>
                                <span></span>
                                <p className="data">Completo - 2017</p>
                                <span></span>
                                <p className="cargo">MariaDB Essentials</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Upinside</h4>
                                <span></span>
                                <p className="data">Completo - 2017</p>
                                <span></span>
                                <p className="cargo">Git Workflow</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Upinside</h4>
                                <span></span>
                                <p className="data">Completo - 2016</p>
                                <span></span>
                                <p className="cargo">Design Responsivo</p>
                            </div>

                            <div>
                                <span>.</span>
                                <h4>Upinside</h4>
                                <span></span>
                                <p className="data">Completo - 2016</p>
                                <span></span>
                                <p className="cargo">HTML5 Do Jeito Certo</p>
                            </div>


                        </article>
                    </Box>
                </section>
            </Sidebar>
        </Container>
    );
}