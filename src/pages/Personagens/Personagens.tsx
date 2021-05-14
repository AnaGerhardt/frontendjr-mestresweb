import { Slider } from "src/components";
import Thanos from "src/assets/images/cards/thanos.png";
import Hulk from "src/assets/images/cards/hulk.png";
import Wanda from "src/assets/images/cards/wanda.png";
import HomemAranha from "src/assets/images/cards/homem-aranha.png";

const content = [
  {
    title: "Homem-Aranha",
    text: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
    image: HomemAranha,
  },
  {
    title: "Wanda Maximoff",
    text: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
    image: Wanda,
  },
  {
    title: "Thanos",
    text: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
    image: Thanos,
  },
  {
    title: "Hulk",
    text: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
    image: Hulk,
  },
];

export const Personagens = () => {
  return <Slider content={content} />;
};
