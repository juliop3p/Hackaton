import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import hero from "./img/abacaxi.png";

function home() {
  return (
    <>
      <header>
        <div>
          <div>
            <img src={hero} alt="Pineapple" />
          </div>
          <div className="titulo">
            <h1>Tenha uma vida mais saudável com a HackLife</h1>
            <p>
              Descubra as melhores feiras perto de você, com os melhores
              produtos naturais e de qualidade com um preço acessível{" "}
            </p>
            <Link to="/map">Mapa</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="services">
          <div className="service-container">
            <div className="services-card service-one"></div>
            <div className="service-description">
              <h3>Descubra novos sabores.</h3>
              <div className="description">
                O Brasil conta com uma flora inigualável que produz flores
                coloridas e frutas extremamente saborosas algumas ainda pouco
                conhecidas da maioria da população. E se tem um alimento que
                combina com o verão, é a fruta. Colhida no pé diretamente para
                as nossas feiras, as frutas são nutritiva, perfumada, colorida e
                cheia de sabor, ela pode transformar a refeição em uma
                experiência única.
              </div>
            </div>
          </div>

          <div className="service-container">
            <div className="services-card service-two"></div>
            <div className="service-description">
              <h3>Benefícios de uma alimentação saudável.</h3>
              <div className="description">
                Comer bem e corretamente é essencial para uma boa qualidade de
                vida. A alimentação saudável traz benefícios para a saúde como
                melhor controle do peso, rendimento do trabalho, aumento da
                memória e da concentração, fortalecimento do sistema imunológico
                e prevenção de doenças.
              </div>
            </div>
          </div>

          <div className="service-container">
            <div className="services-card service-three"></div>
            <div className="service-description">
              <h3>Localização.</h3>
              <div className="description">
                Precisamos da sua localização para buscar as melhores feiras que
                estão perto de você. Os dados que você cadastra em nossas
                plataformas são tratados de forma segura e limitamos o
                tratamento para suas devidas finalidades.
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Receba um Email quando uma feira estiver proxima.</h2>

          <form className="newsletter">
            <input type="email" placeholder="Digite seu Email aqui" />
            <input type="submit" value="Enviar !" />
          </form>
        </section>
      </main>
    </>
  );
}

export default home;
