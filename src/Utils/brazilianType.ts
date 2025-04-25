import flagBrazilianType from "../assets/brasilT.png";
import flagSynonymType from "../assets/brasilTS.png";

export const getBrazilImage = (brazilianType: string | null) => {
    switch (brazilianType) {
      case "T":
        return flagBrazilianType;
      case "TS":
        return flagSynonymType;
      default:
        return undefined;
    }
  };
  
export const getBrazilTitle = (brazilianType: string) => {
    switch (brazilianType) {
      case "T":
        return "Tipo Brasileiro";
      case "TS":
        return "Sinônimo Tipo Brasileiro";
      default:
        return "";
    }
  };