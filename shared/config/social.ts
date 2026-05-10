import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SocialLink } from "../types/links";

export const socialLinks = [
    { href: "https://github.com/Ebram-Barsoum", label: "GitHub", icon: BsGithub },
    { href: "https://www.linkedin.com/in/ebram-barsoum-173964205/", label: "LinkedIn", icon: BsLinkedin },
    { href: 'https://wa.me/+201203131961', label: 'WhatsApp', icon: BsWhatsapp },
    { href: 'mailto:abram.barsoum3.89@gmail.com', label: 'Email', icon: MdOutlineEmail },
] as const satisfies SocialLink[];