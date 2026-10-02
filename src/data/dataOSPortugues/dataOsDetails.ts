import { type OSKey } from "./dataOS";

export type ArvoreGenealogica = {
    raiz: string;
    troncosPrincipais: {
        nome: string;
        gerenciadorPacotes: string;
        filhos: { nome: string; perfil: string }[];
    }[];
};

export type OsDetails = {
    nome: string;
    filosofiaCriador: string;
    historiaDetalhada: string;
    arvoreGenealogica?: ArvoreGenealogica;
    versoes?: string[];
    modusOperandi: string;
    linguagem: string;
    kernel: string;
    fontes: string[];
};

export const linuxInfo: OsDetails = {
    nome: "Linux",
    filosofiaCriador: "Linus Torvalds criou o kernel com um foco pragmático: construir algo altamente funcional e eficiente que atendesse às suas necessidades imediatas de hardware. Posteriormente, aliado à filosofia de Richard Stallman (GNU), o Linux se tornou o maior símbolo de Software Livre e colaboração global, defendendo que o código-fonte deve ser público, modificável e livre para qualquer pessoa usar ou distribuir.",
    historiaDetalhada: "Em 25 de agosto de 1991, o estudante finlandês Linus Torvalds anunciou em uma lista de discussão que estava desenvolvendo um sistema operacional livre, 'apenas um hobby, que não seria grande e profissional como o GNU'. Ele uniu seu kernel aos utilitários desenvolvidos pelo projeto GNU de Richard Stallman. O sistema ganhou força avassaladora por ser gratuito e robusto, tornando-se o coração da infraestrutura moderna da internet, de supercomputadores, servidores e dispositivos móveis (Android).",
    arvoreGenealogica: {
        raiz: "Linux Kernel (1991)",
        troncosPrincipais: [
            {
                nome: "Família Debian (Foco em Estabilidade)",
                gerenciadorPacotes: "APT / .deb",
                filhos: [
                    { nome: "Debian OS", perfil: "A rocha mãe, focado em estabilidade absoluta e servidores." },
                    { nome: "Ubuntu", perfil: "Criado pela Canonical para trazer facilidade de uso e popularizar o desktop." },
                    { nome: "Linux Mint", perfil: "Derivado do Ubuntu, focado em uma interface familiar para ex-usuários de Windows." },
                    { nome: "Kali Linux", perfil: "Derivado do Debian, especializado em testes de penetração e segurança cibernética." }
                ]
            },
            {
                nome: "Família Red Hat (Foco Corporativo e Empresarial)",
                gerenciadorPacotes: "DNF / RPM",
                filhos: [
                    { nome: "RHEL (Red Hat Enterprise Linux)", perfil: "O padrão corporativo pago para grandes servidores mundiais." },
                    { nome: "Fedora", perfil: "O laboratório de inovações e tecnologias de ponta da Red Hat." },
                    { nome: "Rocky Linux / AlmaLinux", perfil: "Clones estáveis, gratuitos e de nível empresarial criados para substituir o CentOS clássico." }
                ]
            },
            {
                nome: "Família Arch Linux (Foco em Faça Você Mesmo / DIY)",
                gerenciadorPacotes: "Pacman",
                filhos: [
                    { nome: "Arch Linux", perfil: "Minimalista e Rolling Release. Você instala o sistema a partir de uma tela preta, peça por peça." },
                    { nome: "Manjaro", perfil: "Facilita o ecossistema Arch, trazendo instalador gráfico e maior estabilidade de pacotes." },
                    { nome: "EndeavourOS", perfil: "A experiência mais próxima do Arch puro, mas com uma interface amigável de instalação." }
                ]
            },
            {
                nome: "Família Slackware & Gentoo (Os Tradicionais de Alto Desempenho)",
                gerenciadorPacotes: "Portage / Netpkg",
                filhos: [
                    { nome: "Slackware", perfil: "A distribuição em atividade mais antiga do mundo, mantendo a estrutura pura do UNIX original." },
                    { nome: "Gentoo", perfil: "Focado em usuários avançados, onde absolutamente todo o sistema e programas são compilados do zero na máquina." }
                ]
            }
        ]
    },
    modusOperandi: "Baseia-se rigidamente na filosofia Unix: 'Cada programa faz apenas uma coisa e a faz de forma excelente'. Funciona de maneira modular e preemptiva através de pipelines (onde a saída de um programa alimenta a entrada do próximo). Dá controle irrestrito ao usuário root sobre todos os aspectos do hardware.",
    linguagem: "Escrito majoritariamente em C (cerca de 95%) e Assembly.",
    kernel: "Monolítico. Todo o gerenciamento de processos, memória, sistemas de arquivos e os drivers rodam no mesmo espaço de privilégio máximo do hardware para máxima performance.",
    fontes: [
        "The Linux Kernel Archives (kernel.org)",
        "GNU Project Official (gnu.org)",
        "DistroWatch - Linux Distribution Timeline History",
        "The Linux Foundation Education Center"
    ]
};

export const windowsInfo: OsDetails = {
    nome: "Microsoft Windows",
    filosofiaCriador: "Bill Gates e Paul Allen enxergaram o computador como um produto de massa. Sua filosofia primordial era: 'Um computador em cada mesa e em cada casa'. O foco do Windows sempre foi a acessibilidade comercial através de interfaces amigáveis, máxima compatibilidade com qualquer peça de hardware do mercado (Plug and Play) e proteção intransigente da retrocompatibilidade (garantir que programas corporativos criados há décadas ainda rodem hoje).",
    historiaDetalhada: "Nascido em 1985 como uma mera interface gráfica rodando sobre o sistema MS-DOS, o Windows era limitado. O grande salto ocorreu em 1993 com o projeto revolucionário do Windows NT (New Technology), liderado pelo engenheiro Dave Cutler. O NT abandonou as amarras do DOS e criou um sistema operacional real, seguro, multiusuário e de 32 bits. Essa base robusta pavimentou o domínio comercial esmagador do Windows XP, 7, 10 e do atual Windows 11.",
    versoes: [
        "Era MS-DOS (16-bits): Windows 1.0, 2.0, 3.1.",
        "Era Híbrida DOS/NT (9x): Windows 95, Windows 98, Windows ME.",
        "Era NT Pura (Moderna): Windows 2000, Windows XP, Windows Vista, Windows 7, Windows 8, Windows 10, Windows 11.",
        "Servidores: Linha Windows Server (2012 a 2025/2026)."
    ],
    modusOperandi: "Opera com prioridade focada no subsistema gráfico e na facilidade de uso do usuário através do Windows Shell (Explorer). Gerencia permissões através do complexo sistema do Registro do Windows (onde centraliza todas as configurações do SO) e utiliza gerenciamento de memória preemptivo com forte isolamento de processos.",
    linguagem: "Desenvolvido essencialmente em C e C++, com subsistemas críticos escritos em Assembly.",
    kernel: "Híbrido. Isola partes do sistema no espaço do usuário para proteger a estabilidade contra falhas (conceito de microkernel), mas mantém subsistemas cruciais de alta velocidade (como a pilha gráfica e drivers críticos) rodando direto no espaço do kernel para evitar lentidões.",
    fontes: [
        "Microsoft Learn - Windows Architecture Documentation",
        "Mark Russinovich - Windows Internals Series (Microsoft Press)",
        "Dave Cutler Legacy & The History of Windows NT Project"
    ]
};

export const macosInfo: OsDetails = {
    nome: "macOS",
    filosofiaCriador: "Steve Jobs acreditava na intersecção entre a tecnologia e as ciências humanas. A filosofia da Apple é a do controle total da experiência de ponta a ponta: o mesmo ecossistema fecha o ciclo desenvolvendo o hardware, o design e o software de forma proprietária. A premissa central é: 'Simplesmente funciona' (It just works), priorizando o design minimalista, a estética visual impecável, a fluidez operacional e a blindagem contra interferências técnicas do usuário.",
    historiaDetalhada: "Lançado em 1984 como Macintosh System Software, revolucionou ao popularizar a interface gráfica e o mouse. Porém, no fim dos anos 90, o sistema clássico estava obsoleto. A salvação veio em 1997 com o retorno de Steve Jobs e a compra da sua empresa NeXT. O sistema operacional da NeXT (o NeXTSTEP) possuía uma base UNIX extremamente robusta. Essa tecnologia foi fundida com o legado da Apple, gerando em 2001 o revolucionário Mac OS X Cheetah, que evoluiu até os sistemas atuais otimizados para os processadores Apple Silicon.",
    versoes: [
        "Era Clássica: System 1 ao 7, Copland (nunca lançado), Mac OS 8 e Mac OS 9.",
        "Era Grandes Felinos (Mac OS X): Cheetah, Jaguar, Panther, Tiger, Leopard, Snow Leopard, Lion, Mountain Lion.",
        "Era Pontos Turísticos da Califórnia (macOS): Mavericks, Yosemite, El Capitan, Mojave, Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia.",
        "Arquiteturas de Transição Histórica: PowerPC -> Intel x86 -> Apple Silicon (ARM)."
    ],
    modusOperandi: "Funciona de forma integrada ao hardware proprietário. O sistema impõe restrições severas de segurança de arquivos por padrão (via System Integrity Protection) e prioriza animações de tela fluidas que acompanham a taxa de atualização física do monitor. É amplamente otimizado para o ecossistema Apple (como iCloud, AirDrop e continuidade com iPhone).",
    linguagem: "O núcleo essencial usa C e C++. As camadas superficiais de interface, animações e o framework Cocoa são escritos em Objective-C e na moderna linguagem Swift.",
    kernel: "Híbrido (XNU - 'X is Not Unix'). É composto por uma arquitetura única que envelopa o microkernel Mach (responsável por gerenciar as threads do processador e troca de mensagens de baixo nível) junto a partes substanciais do sistema operacional de código aberto FreeBSD (que lida com os sistemas de arquivos, permissões padrão Unix e conexões de redes).",
    fontes: [
        "Apple Developer - Kernel Programming Guide",
        "Amit Singh - Mac OS X Internals: A Systems Approach",
        "Darwin Open Source Repository (apple.com)"
    ]
};

export const osDetailsMap: Record<OSKey, OsDetails> = {
    linux: linuxInfo,
    windows: windowsInfo,
    mac: macosInfo,
};