import Image from 'next/Image'
import footerStyles from '../styles/Footer.module.scss'


const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by guzi
      </a>
    </footer>
  )
}

export default Footer
