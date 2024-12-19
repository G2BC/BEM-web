import React from 'react';
import { Container, Typography, Grid, Avatar, Box } from '@mui/material';

import collab1 from '../../../assets/Mariana.png';
import collab2 from '../../../assets/Nelson.png';
import collab3 from '../../../assets/AlexandreLenz.png';
import collab4 from '../../../assets/Marina.png';
import collab5 from '../../../assets/VitorX.png';
import collab6 from '../../../assets/Felipe.png';
import collab7 from '../../../assets/Melissa.png';
import collab8 from '../../../assets/MariaEduarda.png';
import collab9 from '../../../assets/Larissa.png';
import collab10 from '../../../assets/Altielys.png';
import collab11 from '../../../assets/Ariadne.png';
import collab12 from '../../../assets/AlexandreFilho.png';
import collab13 from '../../../assets/Cristiano.png';
import collab14 from '../../../assets/Renato.png';
import collab15 from '../../../assets/Tatiana.png';
import collab16 from '../../../assets/Jadson.png';
import collab17 from '../../../assets/Juliano.png';
import collab18 from '../../../assets/Maria.png';
import collab19 from '../../../assets/Ruby.png';
import collab20 from '../../../assets/Noemia.png';
import Developers from './Developers';
import Institutions from './Institutions';


const collaborators = [
  {
    name: 'Mariana P. Drewinski',
    description:
      'PhD in Plant Biodiversity and Environment (Environmental Research Institute, São Paulo, SP, Brazil), is a mycologist and has experience in systematics of macrofungi and mushroom production. Her research topics include the diversity of wild edible mushrooms in Brazil, mainly from the Atlantic Rainforest, and the cultivation potential of wild strains. Mariana is also interested in fungal conservation and science outreach.',
    image: collab1,
  },
  {
    name: 'Nelson Menolli Jr',
    description:
      'Is biologist, Doctor in Plant Biodiversity and Environment (Environmental Research Institute, São Paulo, SP, Brazil), full professor at Federal Institute of Education, Science and Technology of São Paulo (IFSP), Brazil, coordinator of the iFungiLab and curator of the fungarium FungiA at the same institution. Nelson has experience in taxonomy, conservation and molecular phylogeny of mushroom-forming fungi and cultivation of wild edible mushrooms. As an initiative of scientific outreach and science communication, Nelson coordinates the profile @iFungiLab on Instagram.',
    image: collab2,
  },
  {
    name: 'Alexandre R. Lenz',
    description:
      'PhD in Biotechnology (University of Caxias do Sul, Caxias do Sul, RS, Brazil) with a Doctoral Exchange Program at the Universidad Nacional Autónoma de México, Yucatán (2020). He is Adjunct Professor in Information Systems at Campus I of the State University of Bahia, and Collaborating Professor in the Postgraduate Program in Pharmaceutical Sciences (PPGFARMA), in the Department of Life Sciences of Campus I of the State University of Bahia. Leader of the Bioinformatics and Computational Biology Research Group (G2BC - @g2bc.uneb): Fungal bioinformatics research line. He has experience in the area of bioinformatics, with an emphasis on genomics and gene regulation of fungi, working mainly on the following topics: (i) assembly and annotation of genomes; (ii) phylogenetic and evolutionary analyses; (iii) construction of gene regulatory networks; iv) prospecting for bioactive molecules from ascomycete and basidiomycete fungi and v) mycotourism.',
    image: collab3,
  },
  {
    name: 'Marina Pires Corrêa-Santos',
    description:
      'Msc in Plant Biodiversity and Environment (Environmental Research Institute, São Paulo, SP, Brazil), is a mycologist and has experience in mushroom domestication. She researches the cultivation factors of wild edible mushrooms in Brazil, mainly from the Atlantic Forest. Her masters study focused on the diversity and cultivation factors of wild strains of the genus Lentinus.',
    image: collab4,
  },
  {
    name: 'Vitor X. Lima',
    description:
      'PhD in Fungal Biology (Federal University of Pernambuco, Recife, PE, Brazil), has experience in taxonomy and systematics of myxomycetes, dictyostelids and wood-inhabiting basidiomycetes from the Atlantic Forest, statistical ecology, biogeography and molecular phylogeny of these organisms. Has also experience in prospecting wild edible fungi for ex situ cultivation, and ecology of soil and endophytic fungi.',
    image: collab5,
  },
  {
    name: 'Felipe T. Lima',
    description:
      'MSc in Agricultural Microbiology (Federal University of Viçosa, Viçosa, MG, Brazil), is a Forest Engineer (Rural Federal University of Pernambuco) which focuses its efforts on research and extension in the areas of forest microbiology, microorganism-plant interactions and forestry. Felipe is currently a collaborating researcher at Instituto de Pesquisas e Estudos Florestais (IPEF).',
    image: collab6,
  },
  {
    name: 'Melissa Palacio',
    description:
      'PhD in Botany (Federal University of Rio Grande do Sul, Porto Alegre, RS, Brazil). She has experience in systematics and ecology of Neotropical macrofungi, especially polypores from the Atlantic Forest. Her latest studies focused on the diversity of the genus Polyporus. Melissa is other interests include evolution, biotechnology, fungal education and conservation. ',
    image: collab7,
  },
  {
    name: 'Maria Eduarda A. Borges',
    description:
      'Has a masters and is a PhD student in the Graduate Program in Biology of Fungi, Algae and Plants (Federal University of Santa Catarina, Florianópolis, SC, Brazil). She is interested in taxonomy, molecular phylogeny, and interactions of Agaricomycetes with emphasis in bioluminescent mushrooms, especially species of Mycena. Maria Eduarda is a member of the MICOLAB-UFSC and part of the TropicoEctomicorrizas project. She is an enthusiast of outreach and the person behind @coguquebrilha. She has experience in the field and her interests also include conservation of fungi and teaching mycology.',
    image: collab8,
  },
  {
    name: 'Larissa Trierveiler-Pereira',
    description:
      'PhD in Botany (Federal University of Rio Grande do Sul, Porto Alegre, RS, Brazil) and currently a collaborator researcher at State University of Campinas. She has experience in systematics and ecology of Neotropical macrofungi, particularly basidiomycetes from the Atlantic Forest. Larissa also has experience in scientific outreach and science communication. She hosts an Instagram profile on edible mushrooms (@fancnacabeca), has published a book about the subject, and coordinates elective courses of science communication on mycology and edible mushrooms. Larissa is also interested in topics as: mycology education, ethnomycology, and mycophagy.',
    image: collab9,
  },
  {
    name: 'Altielys C. Magnago',
    description:
      'PhD in Botany (Federal University of Rio Grande do Sul, Porto Alegre, RS, Brazil). He has experience in systematics and ecology of Neotropical macrofungi, specially boletoid fungi from the Brazilian Atlantic Forest. He is also involved in societal activities concerning fungal diversity and scientific divulgation through social media, hosting an Instagram profile on fungal diversity (@fungacapixaba). His other interests include mycophagy and fungal education and conservation.',
    image: collab10,
  },
  {
    name: 'Ariadne N. M. Furtado',
    description:
      ' PhD in Biology of Fungi, Algae and Plants (Federal University of Santa Catarina, Florianópolis, SC, Brazil) and a member of the Brazilian Mycological Society and the South American Mycorrhizal Research Network, and a researcher at the TropicoEctomicorrizas project (UFSC-Brazil). She has experience in systematics of macrofungi, mainly Clavariaceae sensu lato, and diversity of Neotropical ectomycorrhizae.  Ariadne also has experience with protein structure modeling and molecular docking, and is currently a postdoctoral researcher (Federal University of Paraíba, Brazil). Ariadne is interested in how trait-based approaches predict mycorrhizal dispersal structure, and how MiSSPs influence structural modifications of ectomycorrhizal symbiosis by promoting, for example, root determinacy, which pathways are affected by fungal signaling, and how fungi contribute to hormonal imbalance in plants.',
    image: collab11,
  },
  {
    name: 'Alexandre G. S. Silva-Filho',
    description:
      'Msc in Botany and a PhD in Systematics and Evolution (Federal University of Rio Grande do Norte, Natal, RN, Brazil). His expertise is in Taxonomy, Systematics and Phylogeny of Agaricomycetes (Basidiomycota). Currently, he is a Postdoctoral researcher at IFungiLab, at the Federated Institute of Science, Education and Technology of São Paulo, where has been developing research with Taxonomy and Systematics of Mycenaceae from the Brazilian Atlantic Rainforest.',
    image: collab12,
  },
  {
    name: 'Cristiano Coelho do Nascimento',
    description:
      'Is a nurse and biologist, Msc in Fungal Biology (Federal University of Pernambuco, Recife, PE, Brazil), PhD student in Plant Biodiversity and Environment (Institute of Botany, São Paulo, Brazil), professor at Federal Institute of Education, Science and Technology of Piauí (IFPI), Brazil. He is interested in taxonomy, molecular phylogeny, ethnomycology, and conservation of Agaricomycetes, as well as the cultivation of wild edible mushrooms. He is also involved in scientific outreach concerning fungal biology through the profile @IFungiLab on Instagram. ',
    image: collab13,
  },
  {
    name: 'Renato L. M. Alvarenga',
    description:
      'PhD in Fungal Biology (Federal University of Pernambuco, Recife, PE, Brazil), has experience in taxonomy and systematics of jelly fungi (Auriculariales, Tremellales and Dacrymycetes) from the Amazon Forest, Atlantic Forest and Cerrado, statistical ecology, biogeography and molecular phylogeny of wood-inhabiting basidiomycetes. He also has experience in prospecting edible wild fungi for ex situ cultivation, biotechnology with an emphasis on bioactives with antimicrobial activity and enzyme production.',
    image: collab14,
  },
  {
    name: 'Tatiana B. Gibertoni',
    description:
      'PhD in Fungal Biology (Federal University of Pernambuco Recife, PE, Brazil) and in Experimental Ecology and Geobotany (Università degli Studi di Pavia, Italy) and currently full professor at Federal University of Pernambuco, vice-coordinator of the Fungal Biology Post-Graduate Program (Federal University of Pernambuco) and vice-curator of Herbarium URM. She is interested in taxonomy, systematics, conservation of Agaricomycetes, as well as the sustainable use of these fungi as food, in bioremediation and in pharmaceutics. She is also involved in societal activities concerning fungal diversity and scientific divulgation through social media.',
    image: collab15,
  },
  {
    name: 'Jadson J. S. Oliveira',
    description:
      'PhD in Plant Biodiversity and the Environment (Environmental Research Institute, São Paulo, SP, Brazil). He has experience in Botany and Mycology, especially in taxonomy and phylogeny of Fungi (basidiomycetes), mycelium cultivation, genetics and evolution of Agaricales. He has a postdoctoral degree from the Royal Ontario Museum, Toronto, Canada, in Phylogenomics using Exome Target Sequencing in Agaricales, and from the National Institute for Amazon Research (INPA), Manaus, AM, with a taxonomy and systematics research project on the suborder Marasmiineae in areas of the central Amazon. ',
    image: collab16,
  },
  {
    name: 'Juliano M. Baltazar',
    description:
      'PhD in Botany (Federal University of Rio Grande do Sul, Porto Alegre, RS, Brazil) and professor at the Federal University of São Carlos. He has experience in systematics and ecology of Neotropical macrofungi, especially corticioid fungi and polypores from the Atlantic Forest. Juliano is also interested in ethnomycology, mycophagy, edible fungi, mycology education and education as general.',
    image: collab17,
  },
  {
    name: 'Maria Alice Neves',
    description:
      'Has a PhD in Plant Sciences through The New York Botanical Garden and CUNY. She is a professor at the Federal University of Santa Catarina and the graduate program in Biology of Fungi, Algae and Plants, coordinator of the MICOLAB-UFSC, and curator of the Fungarium FLOR. Maria-Alice has experience in mushroom taxonomy and ectomycorrhizal interactions and is the founder of the TropicoEctomicorrizas project. She started the Rick Foray in 2010, an outreach activity to get people interested in mycology and natural history. Her other interests include fungal education and conservation and scientific embroidery.',
    image: collab18,
  },
  {
    name: 'Ruby Vargas-Isla',
    description:
      'PhD in Botany (National Amazon Research Institute, INPA, Manaus, AM, Brazil). She currently participates in the Amazon Mushrooms Research Group projects of the INPA and has a start-up carrying out environmental consulting and spawn production of native mushroom species in the Amazonas Organic Production Center. She chose to study fungi with emphasis on edible native mushrooms to the Amazon, ethnomycology, fungiculture and mycotourism. In addition to articles, she writes booklets and technical-scientific guides and books about mushrooms and is published in indigenous and non-indigenous languages. ',
    image: collab19,
  },
  {
    name: 'Noemia K. Ishikawa',
    description:
      'PhD in Environmental Resources from Hokkaido University, Japan. She is a researcher at the National Amazon Research Institute, Manaus, AM, Brazil. She leads the Amazon Mushrooms Research Group since 2007. Coordinates projects about fungiculture, mycotourism, ethnomycology and popularization of mycology in the Amazon. In addition to articles and scientific books about mushrooms, she writes childrens books, published in indigenous and non-indigenous languages. ',
    image: collab20,
  },
];

const Collaborators: React.FC = () => {
  return (
    <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif', marginLeft: '60px' }}>
      {/* Seção Sobre */}
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px', fontWeight: 'bold' }}>
        Sobre
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'justify', marginBottom: '40px' }}>
        "Muitas espécies de fungos formadores de cogumelos têm sido colhidas na natureza e utilizadas para alimentação e medicina há milhares de anos. No Brasil, o conhecimento sobre a diversidade de cogumelos comestíveis silvestres permanece disperso e pouco estudado. Com base em novas amostras, revisão de registros bibliográficos e buscas no GenBank, registramos 408 espécies de cogumelos comestíveis silvestres no Brasil, das quais 349 podem ser consumidas com segurança e 59 precisam de algum processo para serem consumidas de forma segura. Além disso, outras 149 espécies representam táxons com evidências de consumo pouco claras ou status de comestibilidade não confirmado. Um total de 83 das 408 espécies comestíveis representa registros consistentes no Brasil com base em dados moleculares e/ou tipos nomenclaturais brasileiros. Outros 325 registros representam espécies que necessitam de investigações taxonômicas adicionais para confirmar sua identidade e ocorrência no país, sendo 41 delas usualmente consumidas pela população brasileira. As 284 espécies restantes podem representar novos recursos alimentares para o país. Geramos 156 sequências de DNA, representando 39 espécies dentro de 28 gêneros. Os cogumelos comestíveis são um importante produto florestal não madeireiro, e o conhecimento sobre eles agrega valor à biodiversidade local e à população, aumentando o incentivo à conservação aliada ao desenvolvimento rural sustentável."
      </Typography>

      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px', fontWeight: 'bold' }}>
        Como Citar
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'justify', marginBottom: '40px' }}>
        Drewinski, M.P., Corrêa-Santos, M.P., Lima, V.X. et al. Over 400 food resources from Brazil:
        evidence-based records of wild edible mushrooms. IMA Fungus 15, 40 (2024).{' '}
        <a
          href="https://doi.org/10.1186/s43008-024-00171-8"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          https://doi.org/10.1186/s43008-024-00171-8
        </a>
      </Typography>


      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px', fontWeight: 'bold' }}>
        Nossos Colaboradores
      </Typography>
      <Grid container direction="column" spacing={4}>
        {collaborators.map((collab, index) => (
          <Grid item key={index}>
            <Box display="flex" alignItems="center" gap="20px">
              <Avatar
                src={collab.image}
                alt={collab.name}
                style={{ borderRadius: '50%', width: '150px', height: '150px' }}
              />
              <Box>
                <Typography variant="h6" style={{ margin: '0', textAlign: 'left', fontWeight: 'bold' }}>
                  {collab.name}
                </Typography>
                <Typography variant="body1" style={{ textAlign: 'left', fontSize: '15px' }}>
                  {collab.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Developers />
      <Institutions />
    </Container>
  );
};

export default Collaborators;