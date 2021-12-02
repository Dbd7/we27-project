import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Icon from '../components/icon'
import {} from './contact.module.css'

const ContactPage = () => {
  const contacts = [ 
    {name:'wangemas27', link: 'https://api.whatsapp.com/send?phone=60149017210', icon: <StaticImage alt='whatsapp-1' src='../images/wa.png' />},
    {name:'wangemas27', link: 'https://t.me/WANGEMAS27', icon: <StaticImage alt='telegram-1' src='../images/tg.png' />},
    {name:'wangemas33', link: 'https://api.whatsapp.com/send?phone=60174968967', icon: <StaticImage alt='whatsapp-2' src='../images/wa.png' />},
    {name:'wangemas33', link: 'https://t.me/WANGEMAS33', icon: <StaticImage alt='telegram-2' src='../images/tg.png' />},
  ];

  return (
    <Layout pageTitle="CUSTOMER SERVICE">
      {contacts.map((contact, index) => <Icon key={index} name={contact.name}  linkSrc={contact.link}>{contact.icon}</Icon>)}
    </Layout>
  )
}

export default ContactPage