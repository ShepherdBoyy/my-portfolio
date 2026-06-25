import FacebookIcon from "@/components/icons/FacebookIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import type { SocialLink } from "@/types";
import { Mail } from "lucide-react";

export const socialLinks: SocialLink[] = [
    {
        label: "Email",
        href: "mailto:jmarc.abad26@gmail.com",
        icon: Mail
    },
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
        label: "Facebook",
        href: "https://www.facebook.com/jhey.marc.2024/",
        icon: FacebookIcon
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/marcxmann/",
        icon: InstagramIcon
    },
    {
        label: "Twitter",
        href: "https://x.com/marc_jhey",
        icon: TwitterIcon
    }
];