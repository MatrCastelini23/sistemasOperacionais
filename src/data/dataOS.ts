import { Terminal, Monitor, Laptop, type LucideIcon } from "lucide-react";

export type OSKey = "linux" | "windows" | "mac";

export const DATA: Record<OSKey, {
    label: string;
    icon: LucideIcon;
    accent: string;
    border: string;
    pros: string[];
    cons: string[];
}> = {
    linux: {
        label: "Linux",
        icon: Terminal,
        accent: "text-orange-400",
        border: "border-orange-400",
        pros: [
            "Código aberto e totalmente gratuito",
            "Customização profunda do sistema",
            "Ótimo desempenho em hardware modesto",
            "Ambiente natural para desenvolvimento e servidores",
        ],
        cons: [
            "Curva de aprendizado maior para iniciantes",
            "Compatibilidade limitada com alguns softwares proprietários",
            "Suporte de drivers pode variar entre distribuições",
        ],
    },
    windows: {
        label: "Windows",
        icon: Monitor,
        accent: "text-sky-400",
        border: "border-sky-400",
        pros: [
            "Maior compatibilidade com softwares e jogos",
            "Interface familiar para a maioria dos usuários",
            "Suporte amplo de fabricantes de hardware",
            "Boa integração com ambientes corporativos",
        ],
        cons: [
            "Mais visado por vírus e malware",
            "Atualizações do sistema podem ser intrusivas",
            "Licença paga para uso completo",
        ],
    },
    mac: {
        label: "macOS",
        icon: Laptop,
        accent: "text-zinc-300",
        border: "border-zinc-300",
        pros: [
            "Integração sólida entre hardware e software",
            "Referência em produção de áudio e vídeo",
            "Ecossistema conectado com outros dispositivos",
            "Estabilidade e consistência visual",
        ],
        cons: [
            "Preço elevado do hardware",
            "Pouca flexibilidade para customização",
            "Upgrade de peças limitado na maioria dos modelos",
        ],
    },
};