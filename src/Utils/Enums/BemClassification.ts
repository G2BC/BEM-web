enum BemClassification {
    BEM1 = 1,
    BEM2,
    BEM3,
    BEM4,
    BEM5,
    BEM6,
    BEM7,
    BEM8,
    BEM9,
    BEM10,
    P1,
    P2,
}

export default function getClassificationName(bem: BemClassification): string {
    switch (bem) {
        case BemClassification.BEM1:
            return 'BEM1';
        case BemClassification.BEM2:
            return 'BEM2';
        case BemClassification.BEM3:
            return 'BEM3';
        case BemClassification.BEM4:
            return 'BEM4';
        case BemClassification.BEM5:
            return 'BEM5';
        case BemClassification.BEM6:
            return 'BEM6';
        case BemClassification.BEM7:
            return 'BEM7';
        case BemClassification.BEM8:
            return 'BEM8';
        case BemClassification.BEM9:
            return 'BEM9';
        case BemClassification.BEM10:
            return 'BEM10';
        case BemClassification.P1:
            return 'P1';
        case BemClassification.P2:
            return 'P2';
        default:
            return 'Desconhecido';
    }
}