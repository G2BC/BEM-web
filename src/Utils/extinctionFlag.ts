import extinctionImage0 from "../assets/NE.svg";
import extinctionImage1 from "../assets/DD.svg";
import extinctionImage2 from "../assets/LC.svg";
import extinctionImage3 from "../assets/NT.svg";
import extinctionImage4 from "../assets/VU.svg";
import extinctionImage5 from "../assets/EN.svg";
import extinctionImage6 from "../assets/CR.svg";
import extinctionImage7 from "../assets/EW.svg";
import extinctionImage8 from "../assets/EX.svg";

export const getExtinctionImage = (redListClassification: number) => {
    const extinctionImages = [
      extinctionImage0,
      extinctionImage1,
      extinctionImage2,
      extinctionImage3,
      extinctionImage4,
      extinctionImage5,
      extinctionImage6,
      extinctionImage7,
      extinctionImage8,
    ];
    return extinctionImages[redListClassification - 1];
  };
 
export const getExtinctionTitle = (redListClassification: number) => {
    switch (redListClassification - 1) {
      case 0:
        return "Não Avaliado (NE) Um táxon é considerado Não Avaliado (NE) quando ainda não foi avaliado. Espécies Não Avaliadas não são publicadas na Lista Vermelha da IUCN.";
      case 1:
        return "Dados Insuficientes (DD) Um táxon é classificado como Dados Insuficientes (DD) quando não há informações adequadas para avaliar seu risco de extinção, mesmo que sua biologia seja bem conhecida.";
      case 2:
        return "Menor Preocupação (LC) Um táxon é considerado Menor Preocupação (LC) se, após avaliação, não se qualifica como Criticamente Em Perigo, Em Perigo, Vulnerável ou Quase Ameaçado.";
      case 3:
        return "Quase Ameaçado (NT) Um táxon é classificado como Quase Ameaçado (NT) quando está próximo de se qualificar para uma categoria ameaçada, mas atualmente não atende aos critérios de Criticamente Em Perigo, Em Perigo ou Vulnerável.";
      case 4:
        return "Vulnerável (VU) Um táxon é Vulnerável (VU) se evidencia indica que atende a qualquer um dos critérios A a E, enfrentando alto risco de extinção no meio natural.";
      case 5:
        return "Em Perigo (EN) Um táxon é considerado Em Perigo (EN) se atende a qualquer um dos critérios A a E, enfrentando risco muito alto de extinção no meio natural.";
      case 6:
        return "Criticamente Em Perigo (CR) Um táxon é classificado como Criticamente Em Perigo (CR) se atende a qualquer um dos critérios A a E, enfrentando risco extremamente alto de extinção no meio natural.";
      case 7:
        return "Extinto na Natureza (EW) Um táxon é considerado Extinto na Natureza (EW) quando sobrevive apenas em cultivo ou em cativeiro, sendo presumido extinto quando pesquisas exaustivas não encontram indivíduos em seu habitat histórico.";
      case 8:
        return "Extinto (EX) Um táxon é classificado como Extinto (EX) quando não há dúvidas razoáveis de que o último indivíduo morreu, presumindo-se extinto após pesquisas exaustivas não registrarem indivíduos em seu habitat histórico.";
      default:
        return "Classificação Desconhecida";
    }
  };