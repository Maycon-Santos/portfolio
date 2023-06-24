import emailIcon from '@/assets/social-icons/email.svg'
import githubIcon from '@/assets/social-icons/github.svg'
import linkedinIcon from '@/assets/social-icons/linkedin.svg'
import whatsappIcon from '@/assets/social-icons/whatsapp.svg'

import emailIconDark from '@/assets/social-icons/email-dark.svg'
import githubIconDark from '@/assets/social-icons/github-dark.svg'
import linkedinIconDark from '@/assets/social-icons/linkedin-dark.svg'
import whatsappIconDark from '@/assets/social-icons/whatsapp-dark.svg'

export const profileName = 'Maycon Santos'
export const profileOffice = 'Desenvolvedor de software'

export const socialData = [
  {
    name: 'Whatsapp',
    icon: {
      dark: whatsappIcon,
      light: whatsappIconDark,
    },
    link: 'https://api.whatsapp.com/send?phone=5521965297946',
    label: '+55 21 96529-7946',
  },
  {
    name: 'Github',
    icon: {
      dark: githubIcon,
      light: githubIconDark,
    },
    link: 'https://github.com/Maycon-Santos',
    label: 'github.com/Maycon-Santos',
  },
  {
    name: 'Email',
    icon: {
      dark: emailIcon,
      light: emailIconDark,
    },
    link: 'mailto:mayconsantos.dev@gmail.com',
    label: 'mayconsantos.dev@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: {
      dark: linkedinIcon,
      light: linkedinIconDark,
    },
    link: 'https://www.linkedin.com/in/maycon-link/',
    label: 'linkedin.com/in/maycon-link/',
  },
]
