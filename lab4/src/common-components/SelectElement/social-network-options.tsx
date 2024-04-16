import {
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaSnapchat,
    FaReddit,
    FaPinterest,
    FaTiktok,
    FaWhatsapp, FaTelegram, FaSkype
} from 'react-icons/fa';
import {FaFacebook, FaThreads} from "react-icons/fa6";
import {ReactNode} from "react";

export type SocialNetwork = {
    name: string,
    icon: ReactNode
}

export const socialNetworks: SocialNetwork[] = [
    {name: 'Facebook', icon: <FaFacebook/>},
    {name: 'Telegram', icon: <FaTelegram/>},
    {name: 'Skype', icon: <FaSkype/>},
    {name: 'Threads', icon: <FaThreads/>},
    {name: 'Twitter', icon: <FaTwitter/>},
    {name: 'Instagram', icon: <FaInstagram/>},
    {name: 'LinkedIn', icon: <FaLinkedin/>},
    {name: 'Snapchat', icon: <FaSnapchat/>},
    {name: 'Reddit', icon: <FaReddit/>},
    {name: 'Pinterest', icon: <FaPinterest/>},
    {name: 'TikTok', icon: <FaTiktok/>},
    {name: 'WhatsApp', icon: <FaWhatsapp/>},
];