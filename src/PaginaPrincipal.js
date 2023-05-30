// import React from "react";
// import "./style.css";
// import Logo from "./Imagens/Logo.png";
// import Menu from "./Imagens/menu.svg";
// import Pc from "./Imagens/Pc.png";
// import Eu from "./Imagens/Eu.png";
// import Xd from "./Imagens/Xd.svg";
// import Figma from "./Imagens/figma.svg";
// import Photoshop from "./Imagens/photoshop.svg";
// import Css from "./Imagens/css.svg";
// import Html from "./Imagens/html.svg";
// import Js from "./Imagens/js.svg";
// import Github from "./Imagens/github.svg";

// const PaginaPrincipal = () => {
//   const Scroll = () => {
//     const menu = document.querySelectorAll(".menu h4[href^='#']");
//     const oi = "oi";

//     menu.forEach((item) => {
//       item.addEventListener("click", () => {
//         event.preventDefault();
//         const element = event.target;
//         const id = element.getAttribute("href");
//         const section = document.querySelector(id);
//         const to = section.offsetTop;

//         window.scroll({
//           top: to,
//           behavior: "smooth",
//         });
//       });
//     });
//   };
//   return (
//     <div>
//       <div id="ViewPort_1" className="ViewPort_1">
//         <header className="menu">
//           <img href="#ViewPort_1" className="Logo" src={Logo} />
//           <img className="Menu" src={Menu} />
//           <h4 href="#ViewPort_3" className="HeaderPortifolio">
//             Portifólio
//           </h4>
//           <h4 href="#ViewPort_2" className="HeaderSobre">
//             Sobre
//           </h4>
//           <h4 href="#ViewPort_4" className="HeaderSkils">
//             Skils
//           </h4>
//           <h4 className="HeaderContato">Contato</h4>
//         </header>

//         <h1 className="MainTitle">Vamberto Silva</h1>
//         <h2 className="MainSubTitle">
//           Desenvolvedor
//           <label className="Front-End">Front-End</label>
//         </h2>
//         <img className="Pc" src={Pc} />
//       </div>
//       <div id="ViewPort_2" className="ViewPort_2">
//         <img src={Eu} className="Eu" />
//         <div className="MinhaDescricao">
//           <p className="QuemEVambertoSilva">Quem é Vamberto Silva?</p>
//           <p className="MinhaDescricaoEmTexto">
//             Sou desenvolvedor front-end, e UI designer, completamente apaixonado
//             por tecnologia. Comecei a minha caminhada no começo de 2022, quando
//             tinha 17 anos, desde então estou a cada dia melhorando a qualidade
//             do meu trabalho.
//           </p>
//           <img src={Eu} className="EuMobile" />

//           <button className="BtnConhecerMais">CONHECER MAIS</button>
//         </div>
//       </div>
//       <div id="ViewPort_3" className="ViewPort_3">
//         <label className="none">.</label>
//         <h1 className="ViewPort_3Title">PORTIFÓLIO</h1>
//         <div className="ProjetoContainerM">
//           <div className="ProjetoContainer">
//             <h2 className="ContainerTitle">EM CONSTRUÇAO</h2>
//             <p className="ContainerSubtitle">Em pouco tempo estará pronto</p>
//           </div>
//           <div className="ProjetoContainer">
//             <h2 className="ContainerTitle">EM CONTRUÇÃO</h2>
//             <p className="ContainerSubtitle">Em pouco tempo estará pronto</p>
//           </div>
//           <div className="ProjetoContainer">
//             <h2 className="ContainerTitle">EM CONTRUÇÃO</h2>
//             <p className="ContainerSubtitle">Em pouco tempo estará pronto</p>
//           </div>
//         </div>
//         <div className="ViewPort_3Line"></div>
//       </div>

//       <div id="ViewPort_4" className="ViewPort_4">
//         <p className="ViewPort_4_Title">Skils</p>
//         <div className="ViewPort_4_Habilidades">
//           <img className="ViewPort_4_Xd ViewPort_4_Images" src={Xd} />
//           <img className="ViewPort_4_FXd ViewPort_4_Images" src={Figma} />
//           <img className="ViewPort_4_Ps Xd ViewPort_4_Images" src={Photoshop} />
//           <img className="ViewPort_4_Css Xd ViewPort_4_Images" src={Css} />
//           <img className="ViewPort_4_Html Xd ViewPort_4_Images" src={Html} />
//           <img className="ViewPort_4_Js Xd ViewPort_4_Images" src={Js} />
//         </div>
//         <p className="ViewPort_4_github">
//           <a href="https://github.com/VambertoSilva">
//             <img className="ViewPort_4_github" src={Github} />
//           </a>
//         </p>
//       </div>
//       <div className="rodape">
//         <div className="ViewPort_4Line"></div>
//         <p className="RodaPe_Txt">© Copyright 2022 por Vamberto Silva</p>
//         <p className="RodaPe_Txt">Todos os direitos reservados.</p>
//       </div>
//       <script type="text/javascript">{Scroll()}</script>
//     </div>
//   );
// };

// export default PaginaPrincipal;

import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import Logo from "./Imagens/Logo.png";
import Menu from "./Imagens/menu.svg";
import Pc from "./Imagens/Pc.png";
import Eu from "./Imagens/Eu.png";
import Xd from "./Imagens/Xd.svg";
import Figma from "./Imagens/figma.svg";
import Photoshop from "./Imagens/photoshop.svg";
import Css from "./Imagens/css.svg";
import Html from "./Imagens/html.svg";
import Js from "./Imagens/js.svg";
import Github from "./Imagens/github.svg";

const PaginaPrincipal = () => {
  const scroll = (event) => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
    const to = section.offsetTop;

    window.scroll({
      top: to,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div id="ViewPort_1" className="ViewPort_1">
        <header className="menu">
          <img href="#ViewPort_1" className="Logo" src={Logo} />
          <img className="Menu" src={Menu} />
          <h4
            className="menuItem"
            href="#ViewPort_3"
            className="HeaderPortifolio"
            onClick={scroll}
          >
            Portifólio
          </h4>
          <h4
            className="menuItem"
            href="#ViewPort_2"
            className="HeaderSobre"
            onClick={scroll}
          >
            Sobre
          </h4>
          <h4
            className="menuItem"
            href="#ViewPort_4"
            className="HeaderSkils"
            onClick={scroll}
          >
            Skils
          </h4>
          <h4 className="HeaderContato">Contato</h4>
        </header>

        <h1 className="MainTitle">Vamberto Silva</h1>
        <h2 className="MainSubTitle">
          Desenvolvedor
          <label className="Front-End">Front-End</label>
        </h2>
        <img className="Pc" src={Pc} />
      </div>
      <div id="ViewPort_2" className="ViewPort_2">
        <img src={Eu} className="Eu" />
        <div className="MinhaDescricao">
          <p className="QuemEVambertoSilva">Quem é Vamberto Silva?</p>
          <p className="MinhaDescricaoEmTexto">
            Sou desenvolvedor front-end, e UI designer, completamente apaixonado
            por tecnologia. Comecei a minha caminhada no começo de 2022, quando
            tinha 17 anos, desde então estou a cada dia melhorando a qualidade
            do meu trabalho.
          </p>
          <img src={Eu} className="EuMobile" />

          <button className="BtnConhecerMais">CONHECER MAIS</button>
        </div>
      </div>
      <div id="ViewPort_3" className="ViewPort_3">
        <label className="none">.</label>
        <h1 className="ViewPort_3Title">PORTIFÓLIO</h1>
        <div className="ProjetoContainerM">
          <Link to="/financas" className="Link">
            {" "}
            <div className="ProjetoContainer">
              <h2 className="ContainerTitle">Finanças</h2>
              <p className="ContainerSubtitle">
                Projeto desenvolvido para registrar receitas e despesas
              </p>
            </div>
          </Link>
          <div className="ProjetoContainer">
            <h2 className="ContainerTitle">EM CONTRUÇÃO</h2>
            <p className="ContainerSubtitle">Em pouco tempo estará pronto</p>
          </div>
          <div className="ProjetoContainer">
            <h2 className="ContainerTitle">EM CONTRUÇÃO</h2>
            <p className="ContainerSubtitle">Em pouco tempo estará pronto</p>
          </div>
        </div>
        <div className="ViewPort_3Line"></div>
      </div>

      <div id="ViewPort_4" className="ViewPort_4">
        <p className="ViewPort_4_Title">Skils</p>
        <div className="ViewPort_4_Habilidades">
          <img className="ViewPort_4_Xd ViewPort_4_Images" src={Xd} />
          <img className="ViewPort_4_FXd ViewPort_4_Images" src={Figma} />
          <img className="ViewPort_4_Ps Xd ViewPort_4_Images" src={Photoshop} />
          <img className="ViewPort_4_Css Xd ViewPort_4_Images" src={Css} />
          <img className="ViewPort_4_Html Xd ViewPort_4_Images" src={Html} />
          <img className="ViewPort_4_Js Xd ViewPort_4_Images" src={Js} />
        </div>
        <p className="ViewPort_4_github">
          <a href="https://github.com/VambertoSilva">
            <img className="ViewPort_4_github" src={Github} />
          </a>
        </p>
      </div>
      <div className="rodape">
        <div className="ViewPort_4Line"></div>
        <p className="RodaPe_Txt">© Copyright 2022 por Vamberto Silva</p>
        <p className="RodaPe_Txt">Todos os direitos reservados.</p>
      </div>
      <script type="text/javascript">{}</script>
    </div>
  );
};

export default PaginaPrincipal;
