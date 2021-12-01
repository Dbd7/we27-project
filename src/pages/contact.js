import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Icon from '../components/icon'
import {} from './contact.module.css'

const ContactPage = () => {
  const contacts = [ 
    {name:'whatsapp', link: 'https://api.whatsapp.com/send?phone=60149017210', icon: <StaticImage alt='whatsapp' src='../images/WA.png' />},
    {name:'telegram', link: 'https://t.me/WANGEMAS27', icon: <StaticImage alt='telegram' src='../images/TG.png' />},
  ];

  return (
    <Layout pageTitle="CUSTOMER SERVICE">
      {contacts.map((contact, index) => <Icon key={index} name={contact.name}  linkSrc={contact.link}>{contact.icon}</Icon>)}
    </Layout>
  )
}

export default ContactPage