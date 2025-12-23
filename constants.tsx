
import { ServiceInfo, HomeBanner } from './types';

export const WHATSAPP_NUMBER = "+5511962657714";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SERVICES: ServiceInfo[] = [
  {
    id: 'engenharia-civil',
    title: 'Engenharia Civil',
    shortTitle: 'Civil',
    description: 'Execução de obras estruturais, reformas e acabamentos de alto padrão para ambientes comerciais robustos.',
    gymApplication: 'Construção de áreas de musculação, vestiários premium, salas de aula coletiva e reforço estrutural para equipamentos pesados.',
    companyApplication: 'Adequação de layouts produtivos, fachadas corporativas e reformas estruturais em galpões e prédios comerciais.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['engenharia-eletrica', 'projetos-tecnicos', 'manutencao-predial', 'bombeiros', 'spda', 'laudos-tecnicos']
  },
  {
    id: 'engenharia-eletrica',
    title: 'Engenharia Elétrica',
    shortTitle: 'Elétrica',
    description: 'Projetos e instalações elétricas complexas, garantindo estabilidade e eficiência energética.',
    gymApplication: 'Infraestrutura dedicada para esteiras, simuladores de escada e sistemas de som/iluminação cênica de alta potência.',
    companyApplication: 'Montagem de quadros de força, cabeamento estruturado e otimização de consumo para grandes parques de máquinas.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['geradores', 'spda', 'laudos-tecnicos', 'automacao', 'energia-solar', 'monitoramento']
  },
  {
    id: 'spda',
    title: 'SPDA e Aterramento',
    shortTitle: 'SPDA',
    description: 'Proteção contra descargas atmosféricas e sistemas de aterramento rigorosos conforme as normas vigentes.',
    gymApplication: 'Proteção total dos eletrônicos sensíveis das máquinas e segurança absoluta para os alunos durante tempestades.',
    companyApplication: 'Segurança patrimonial e proteção de servidores e ativos tecnológicos contra surtos elétricos.',
    imageUrl: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['engenharia-eletrica', 'laudos-tecnicos', 'bombeiros', 'geradores', 'manutencao-predial', 'projetos-tecnicos']
  },
  {
    id: 'projetos-tecnicos',
    title: 'Projetos Técnicos',
    shortTitle: 'Projetos',
    description: 'Planejamento detalhado multidisciplinar integrando arquitetura, engenharia e tecnologia.',
    gymApplication: 'Fluxogramas de circulação, ergonomia de posicionamento de equipamentos e integração estética/técnica.',
    companyApplication: 'Projetos executivos para implantação de novas unidades, layouts industriais e logística interna.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['engenharia-civil', 'engenharia-eletrica', 'bombeiros', 'automacao', 'laudos-tecnicos', 'manutencao-predial']
  },
  {
    id: 'bombeiros',
    title: 'Bombeiros (AVCB / CLCB)',
    shortTitle: 'Bombeiros',
    description: 'Consultoria completa para obtenção e renovação de licenças junto ao corpo de bombeiros.',
    gymApplication: 'Dimensionamento de rotas de fuga para grandes fluxos e sistemas de combate a incêndio em áreas de alta densidade.',
    companyApplication: 'Regularização de galpões e indústrias, garantindo a conformidade legal para operação comercial.',
    imageUrl: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['laudos-tecnicos', 'spda', 'engenharia-eletrica', 'manutencao-predial', 'projetos-tecnicos', 'engenharia-civil']
  },
  {
    id: 'laudos-tecnicos',
    title: 'Laudos Técnicos',
    shortTitle: 'Laudos',
    description: 'Emissão de ARTs, vistorias cautelares e laudos de estabilidade para total conformidade técnica.',
    gymApplication: 'Laudos de ruído, estabilidade de mezaninos e conformidade das instalações para vistorias municipais.',
    companyApplication: 'Avaliações de segurança do trabalho, perícias de engenharia e certificações de conformidade.',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['bombeiros', 'spda', 'engenharia-eletrica', 'manutencao-predial', 'projetos-tecnicos', 'engenharia-civil']
  },
  {
    id: 'geradores',
    title: 'Geradores',
    shortTitle: 'Geradores',
    description: 'Venda, instalação e manutenção de grupos geradores para operação ininterrupta.',
    gymApplication: 'Energia garantida para academias 24h, evitando paralisações em horários de pico por falhas na rede.',
    companyApplication: 'Continuidade operacional para TI, climatização e segurança em prédios corporativos e indústrias.',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['engenharia-eletrica', 'spda', 'automacao', 'manutencao-predial', 'monitoramento', 'energia-solar']
  },
  {
    id: 'automacao',
    title: 'Redes e Automação',
    shortTitle: 'Automação',
    description: 'Integração tecnológica inteligente para controle de acesso, iluminação e climatização.',
    gymApplication: 'Controle de catracas biométricas, sonorização inteligente e gerenciamento remoto de iluminação e ar-condicionado.',
    companyApplication: 'Sistemas inteligentes para economia de energia e redes de dados robustas para escritórios modernos.',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-103792e17734?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['monitoramento', 'engenharia-eletrica', 'geradores', 'energia-solar', 'projetos-tecnicos', 'laudos-tecnicos']
  },
  {
    id: 'monitoramento',
    title: 'Monitoramento e Segurança',
    shortTitle: 'Segurança',
    description: 'Sistemas de CFTV IP, alarmes e monitoramento em tempo real para proteção de ativos.',
    gymApplication: 'Segurança absoluta em perímetros externos e monitoramento de fluxo de alunos em áreas de treino.',
    companyApplication: 'Proteção de estoques, controle de acesso restrito e vigilância patrimonial estratégica.',
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['automacao', 'engenharia-eletrica', 'geradores', 'manutencao-predial', 'laudos-tecnicos', 'spda']
  },
  {
    id: 'energia-solar',
    title: 'Energia Solar',
    shortTitle: 'Energia Solar',
    description: 'Projetos fotovoltaicos personalizados para redução drástica de custos fixos com energia.',
    gymApplication: 'Redução de até 95% na conta de luz, compensando o alto consumo de esteiras e ar-condicionado.',
    companyApplication: 'Sustentabilidade corporativa unida à economia operacional para empresas de todos os portes.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-fe5bb658582f?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['engenharia-eletrica', 'automacao', 'geradores', 'projetos-tecnicos', 'laudos-tecnicos', 'manutencao-predial']
  },
  {
    id: 'manutencao-predial',
    title: 'Manutenção Predial',
    shortTitle: 'Manutenção',
    description: 'Contratos de manutenção preventiva e corretiva para manter a infraestrutura sempre impecável.',
    gymApplication: 'Preservação da estética e funcionalidade das instalações sob alto fluxo de usuários diários.',
    companyApplication: 'Gestão de facilities para condomínios comerciais e grandes plantas industriais.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    relatedIds: ['engenharia-civil', 'engenharia-eletrica', 'spda', 'bombeiros', 'laudos-tecnicos', 'geradores']
  }
];

export const HOME_BANNERS: HomeBanner[] = [
  {
    title: "Academias Prontas e Completas",
    subtitle: "Engenharia 360º da obra civil à tecnologia para grandes redes de fitness.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    cta: "Saiba Mais"
  },
  {
    title: "Engenharia Civil e Obras",
    subtitle: "Solidez e sofisticação em reformas comerciais de alto padrão.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    cta: "Projetos Civis"
  },
  {
    title: "Engenharia Elétrica Comercial",
    subtitle: "Sistemas complexos para equipamentos de alta performance.",
    imageUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200",
    cta: "Soluções Elétricas"
  },
  {
    title: "SPDA e Segurança",
    subtitle: "Proteção absoluta contra descargas elétricas e surtos de rede.",
    imageUrl: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1200",
    cta: "Nossa Proteção"
  },
  {
    title: "Bombeiros e Laudos Técnicos",
    subtitle: "Regularização completa para AVCB, CLCB e normas de segurança.",
    imageUrl: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&q=80&w=1200",
    cta: "Certificações"
  },
  {
    title: "Geradores e Energia Contínua",
    subtitle: "Sua operação não pode parar. Soluções para academias 24h.",
    imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200",
    cta: "Ver Geradores"
  },
  {
    title: "Redes, Automação e Monitoramento",
    subtitle: "Tecnologia inteligente para gestão e segurança patrimonial.",
    imageUrl: "https://images.unsplash.com/photo-1558002038-103792e17734?auto=format&fit=crop&q=80&w=1200",
    cta: "Smart Building"
  },
  {
    title: "Energia Solar Corporativa",
    subtitle: "Sustentabilidade com economia real no fluxo de caixa da sua empresa.",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?auto=format&fit=crop&q=80&w=1200",
    cta: "Consultar Viabilidade"
  }
];
