import React from "react";
import "./styles.css";

/**
 * Images
 */
import aboutImage from "./images/about-image.png";

function AboutComponent() {
  return (
    <div className="about-component" id="sobre">
      <div className="about-title">
        <h1>Quem é Karine Medeiros ?</h1>
      </div>

      <div className="about-container">
        <div className="about-container-main">
          <div className="about-text">
            <div>
              <p>Cantora sertaneja e compositora. Essa é a definição da artista sertaneja Karine Medeiros residente e domiciliada em Brasília - DF. Tem obtido destaque e notoriedade em suas composições de modão sofrido e sertanejo universitário.</p>
            </div>

            <div>
              <p>A artista tem se destacado atualmente por diversos bares, ganhando cada vez mais reconhecimento e apoio de seus fãs. Além do mais, tem sido também responsável por dar o tom a diversas músicas sertanejas que fazem sucesso nas paradas de todo o País.</p>
            </div>

            <div className="text-tertiary">
              <p>
              Com uma iniciação na música surpreendente, a jovem tem tomado muito orgulho da sua trajetória como a música. Karine, que já cantou em diversos eventos particulares e inclusive casamentos, vive atualmente apenas da música. A artista deu início em sua carreira solo aos 21 anos. Hoje, carrega em sua bagagem diversas colaborações levando felicidade em diversos shows por onde passou. Preservando sua origem e raízes simples, Karine Medeiros segue com a bagagem de quem domina a arte de compor, tocar e cantar, conquistando cada vez mais seu espaço, sempre com muita alegria e seu jeito carismático de ser.
              </p>
            </div>
          </div>
        
          <div className="about-image">
            <img src={aboutImage} alt="aboutImage" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent;