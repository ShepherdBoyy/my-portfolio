import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import type { SocialLink } from "@/types";
import { Mail } from "lucide-react";

export const socialLinks: SocialLink[] = [
    {
        label: "Github",
        href: "https://github.com/ShepherdBoyy",
        icon: GithubIcon
    },
    {
        label: "LinkedIn",
        href: "www.linkedin.com/in/jmarcabad",
        icon: LinkedinIcon
    },
    {
        label: "Email",
        href: "mailto:jmarc.abad26@gmail.com",
        icon: Mail
    }
];