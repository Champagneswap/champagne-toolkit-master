import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.champagneswap.com/contact-us",
      },
      {
        label: "Blog",
        href: "https://champagneswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.champagneswap.com/contact-us/telegram",
      },
      {
        label: "CHAM",
        href: "https://docs.champagneswap.com/tokenomics/cham",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.champagneswap.com/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.champagneswap.com/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.champagneswap.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/champagneswap",
      },
      {
        label: "Documentation",
        href: "https://docs.champagneswap.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/champagnedefi",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/champagneswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/champagneswap",
      },
      {
        label: "中文",
        href: "https://t.me/PancakeSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/champagneswap",
      },
      {
        label: "Italiano",
        href: "https://t.me/champagneswap",
      },
      {
        label: "русский",
        href: "https://t.me/champagneswap",
      },
      {
        label: "Türkiye",
        href: "https://t.me/champagneswap",
      },
      {
        label: "Português",
        href: "https://t.me/champagneswap",
      },
      {
        label: "Español",
        href: "https://t.me/champagneswap",
      },
      {
        label: "日本語",
        href: "https://t.me/champagneswap",
      },
      {
        label: "Français",
        href: "https://t.me/champagneswap",
      },
      {
        label: "Datch",
        href: "https://t.me/champagneswap",
      },
      {
        label: "Filipino",
        href: "https://t.me/champagneswap",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/champagneswap",
      },
      {
        label: "Announcements",
        href: "https://t.me/champagneswap",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/champagneswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/champagneswap",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/champagneswap/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/champagneswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
