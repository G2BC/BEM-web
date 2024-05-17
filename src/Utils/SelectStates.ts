import Select from "../Interfaces/Select";

const SelectStates = (): Select => {
    return {
        options:
            [
                { id: "Acre", value: "AC" },
                { id: "Alagoas", value: "AL" },
                { id: "Amapá", value: "AP" },
                { id: "Amazonas", value: "AM" },
                { id: "Bahia", value: "BA" },
                { id: "Ceará", value: "CE" },
                { id: "Distrito Federal", value: "DF" },
                { id: "Espírito Santo", value: "ES" },
                { id: "Goiás", value: "GO" },
                { id: "Maranhão", value: "MA" },
                { id: "Mato Grosso", value: "MT" },
                { id: "Mato Grosso do Sul", value: "MS" },
                { id: "Minas Gerais", value: "MG" },
                { id: "Pará", value: "PA" },
                { id: "Paraíba", value: "PB" },
                { id: "Paraná", value: "PR" },
                { id: "Pernambuco", value: "PE" },
                { id: "Piauí", value: "PI" },
                { id: "Rio de Janeiro", value: "RJ" },
                { id: "Rio Grande do Norte", value: "RN" },
                { id: "Rio Grande do Sul", value: "RS" },
                { id: "Rondônia", value: "RO" },
                { id: "Roraima", value: "RR" },
                { id: "Santa Catarina", value: "SC" },
                { id: "São Paulo", value: "SP" },
                { id: "Sergipe", value: "SE" },
                { id: "Tocantins", value: "TO" }
            ]
    }
}

export default SelectStates;