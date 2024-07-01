enum RedListClassification {
    NA = 0,
    NE,
    DD,
    LC,
    NT,
    VU,
    EN,
    CR,
    EW,
    EX
}

export default function getClassificationName(bem: RedListClassification): string {
    switch (bem) {
        case RedListClassification.NA:
            return 'NA';
        case RedListClassification.NE:
            return 'NE';
        case RedListClassification.DD:
            return 'DD';
        case RedListClassification.LC:
            return 'LC';
        case RedListClassification.NT:
            return 'NT';
        case RedListClassification.VU:
            return 'VU';
        case RedListClassification.EN:
            return 'EN';
        case RedListClassification.CR:
            return 'CR';
        case RedListClassification.EW:
            return 'EW';
        case RedListClassification.EX:
            return 'EX';
        default:
            return 'Desconhecido';
    }
}