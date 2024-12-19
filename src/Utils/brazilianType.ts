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
  
  export const getBrazilTitle = (brazilianType: string | null): string => {
    if (brazilianType === null) {
      return "Informação não disponível"; // Ou outro valor padrão
    }
  
    switch (brazilianType) {
      case "T":
        return "Tipo Brasileiro";
      case "TS":
        return "Sinônimo Tipo Brasileiro";
      default:
        return "Tipo desconhecido"; // Valor padrão para tipos desconhecidos
    }
  };