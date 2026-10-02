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
    filosofiaCriador: "Linus Torvalds created the kernel with a pragmatic focus: building something highly functional and efficient that would meet his immediate hardware needs. Later, combined with Richard Stallman’s GNU philosophy, Linux became one of the greatest symbols of Free Software and global collaboration, advocating that source code should be public, modifiable, and free for anyone to use or distribute.",
    historiaDetalhada: "On August 25, 1991, Finnish student Linus Torvalds announced on a discussion list that he was developing a free operating system, 'just a hobby, which would not be big and professional like GNU'. He combined his kernel with the utilities developed by Richard Stallman’s GNU Project. The system gained tremendous momentum because it was free and robust, becoming the heart of modern internet infrastructure, supercomputers, servers, and mobile devices (Android).",
    arvoreGenealogica: {
        raiz: "Linux Kernel (1991)",
        troncosPrincipais: [
            {
                nome: "Debian Family (Focus on Stability)",
                gerenciadorPacotes: "APT / .deb",
                filhos: [
                    { nome: "Debian OS", perfil: "The foundational distribution, focused on absolute stability and servers." },
                    { nome: "Ubuntu", perfil: "Created by Canonical to improve ease of use and popularize Linux on the desktop." },
                    { nome: "Linux Mint", perfil: "Derived from Ubuntu, focused on a familiar interface for former Windows users." },
                    { nome: "Kali Linux", perfil: "Derived from Debian, specialized in penetration testing and cybersecurity." }
                ]
            },
            {
                nome: "Red Hat Family (Corporate and Enterprise Focus)",
                gerenciadorPacotes: "DNF / RPM",
                filhos: [
                    { nome: "RHEL (Red Hat Enterprise Linux)", perfil: "The paid enterprise standard for large-scale servers worldwide." },
                    { nome: "Fedora", perfil: "Red Hat's laboratory for innovations and cutting-edge technologies." },
                    { nome: "Rocky Linux / AlmaLinux", perfil: "Stable, free, enterprise-grade clones created to replace classic CentOS." }
                ]
            },
            {
                nome: "Arch Linux Family (Do-It-Yourself / DIY Focus)",
                gerenciadorPacotes: "Pacman",
                filhos: [
                    { nome: "Arch Linux", perfil: "Minimalist and Rolling Release. You install the system from a blank terminal, piece by piece." },
                    { nome: "Manjaro", perfil: "Simplifies the Arch ecosystem by providing a graphical installer and greater package stability." },
                    { nome: "EndeavourOS", perfil: "The experience closest to pure Arch, but with a user-friendly installation interface." }
                ]
            },
            {
                nome: "Slackware & Gentoo Family (Traditional High-Performance Systems)",
                gerenciadorPacotes: "Portage / Netpkg",
                filhos: [
                    { nome: "Slackware", perfil: "The oldest active distribution in the world, preserving the original UNIX structure." },
                    { nome: "Gentoo", perfil: "Focused on advanced users, where the entire system and its programs are compiled from scratch on the machine." }
                ]
            }
        ]
    },
    modusOperandi: "It is strictly based on the Unix philosophy: 'Each program does one thing and does it exceptionally well'. It operates in a modular and preemptive manner through pipelines (where the output of one program feeds the input of the next). It gives the root user unrestricted control over all aspects of the hardware.",
    linguagem: "Written primarily in C (about 95%) and Assembly.",
    kernel: "Monolithic. Process management, memory management, file systems, and drivers all run in the same highest-privilege hardware space for maximum performance.",
    fontes: [
        "The Linux Kernel Archives (kernel.org)",
        "GNU Project Official (gnu.org)",
        "DistroWatch - Linux Distribution Timeline History",
        "The Linux Foundation Education Center"
    ]
};

export const windowsInfo: OsDetails = {
    nome: "Microsoft Windows",
    filosofiaCriador: "Bill Gates and Paul Allen viewed the computer as a mass-market product. Their primary philosophy was: 'A computer on every desk and in every home'. Windows has always focused on commercial accessibility through user-friendly interfaces, maximum compatibility with hardware on the market (Plug and Play), and strong backward compatibility (ensuring that corporate programs created decades ago can still run today).",
    historiaDetalhada: "Born in 1985 as a simple graphical interface running on MS-DOS, Windows was limited. The major leap came in 1993 with the revolutionary Windows NT (New Technology) project, led by engineer Dave Cutler. NT broke away from DOS and created a real, secure, multi-user 32-bit operating system. This robust foundation paved the way for the commercial dominance of Windows XP, 7, 10, and the current Windows 11.",
    versoes: [
        "MS-DOS Era (16-bit): Windows 1.0, 2.0, 3.1.",
        "Hybrid DOS/NT Era (9x): Windows 95, Windows 98, Windows ME.",
        "Pure NT Era (Modern): Windows 2000, Windows XP, Windows Vista, Windows 7, Windows 8, Windows 10, Windows 11.",
        "Servers: Windows Server line (2012 to 2025/2026)."
    ],
    modusOperandi: "It operates with a strong focus on the graphical subsystem and user-friendliness through the Windows Shell (Explorer). It manages permissions through the complex Windows Registry system (which centralizes all OS settings) and uses preemptive memory management with strong process isolation.",
    linguagem: "Developed primarily in C and C++, with critical subsystems written in Assembly.",
    kernel: "Hybrid. It isolates parts of the system in user space to protect stability against failures (a microkernel concept), but keeps crucial high-speed subsystems (such as the graphics stack and critical drivers) running directly in kernel space to avoid slowdowns.",
    fontes: [
        "Microsoft Learn - Windows Architecture Documentation",
        "Mark Russinovich - Windows Internals Series (Microsoft Press)",
        "Dave Cutler Legacy & The History of Windows NT Project"
    ]
};

export const macosInfo: OsDetails = {
    nome: "macOS",
    filosofiaCriador: "Steve Jobs believed in the intersection between technology and the humanities. Apple's philosophy is one of total control of the end-to-end experience: the same ecosystem closes the loop by developing the hardware, design, and software as proprietary components. The central premise is: 'It just works', prioritizing minimalist design, polished visual aesthetics, operational fluidity, and protection against technical interference from the user.",
    historiaDetalhada: "Released in 1984 as Macintosh System Software, it revolutionized personal computing by popularizing the graphical interface and mouse. However, by the late 1990s, the classic system had become obsolete. The solution came in 1997 with Steve Jobs' return and Apple's acquisition of his company NeXT. NeXT's operating system (NeXTSTEP) had an extremely robust UNIX foundation. This technology was merged with Apple's legacy, producing the revolutionary Mac OS X Cheetah in 2001, which evolved into today's systems optimized for Apple Silicon processors.",
    versoes: [
        "Classic Era: System 1 through 7, Copland (never released), Mac OS 8, and Mac OS 9.",
        "Big Cats Era (Mac OS X): Cheetah, Jaguar, Panther, Tiger, Leopard, Snow Leopard, Lion, Mountain Lion.",
        "California Landmarks Era (macOS): Mavericks, Yosemite, El Capitan, Mojave, Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia.",
        "Historical Architecture Transitions: PowerPC -> Intel x86 -> Apple Silicon (ARM)."
    ],
    modusOperandi: "It operates in close integration with proprietary hardware. The system enforces strict file security restrictions by default (through System Integrity Protection) and prioritizes smooth screen animations that follow the monitor's physical refresh rate. It is heavily optimized for the Apple ecosystem (such as iCloud, AirDrop, and continuity with iPhone).",
    linguagem: "The core uses C and C++. The higher-level interface layers, animations, and the Cocoa framework are written in Objective-C and the modern Swift language.",
    kernel: "Hybrid (XNU - 'X is Not Unix'). It consists of a unified architecture that incorporates the Mach microkernel (responsible for managing processor threads and low-level message passing) together with substantial parts of the open-source FreeBSD operating system (which handles file systems, standard Unix permissions, and network connections).",
    fontes: [
        "Apple Developer - Kernel Programming Guide",
        "Amit Singh - Mac OS X Internals: A Systems Approach",
        "Darwin Open Source Repository (apple.com)"
    ]
};

export const osDetailsMapIngles: Record<OSKey, OsDetails> = {
    linux: linuxInfo,
    windows: windowsInfo,
    mac: macosInfo,
};