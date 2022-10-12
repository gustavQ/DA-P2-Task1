import Image from 'next/image'
import headerStyles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <a href="https://en.wikipedia.org/wiki/Non-fungible_token"
          target="_blank">
        <span>NFT</span>  
        </a>
        &nbsp;Rug Curriculum
      </h1>
      <p className={headerStyles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id lectus sollicitudin, 
      aliquam risus lacinia, aliquam est. Phasellus at lobortis lacus. Integer gravida dictum 
      sapien sed mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada 
      fames ac turpis egestas. Nunc ultricies massa tellus, non tristique ante eleifend eget. 
      Fusce varius, enim tempor suscipit suscipit, ligula orci congue sapien, vitae rhoncus metus 
      leo nec magna. Praesent vestibulum tempor commodo. Nullam lectus odio, finibus sed vehicula ut,
      tincidunt vitae ex. Phasellus sit amet ultricies orci. Ut ut ex porttitor leo suscipit placerat.
      Suspendisse purus ex, vehicula at scelerisque non, pharetra quis elit.
      </p>
      <div>
      <a href="https://twitter.com/Qgustv"
            target="_blank"
            rel="noopener noreferrer">
              <Image src="/twitter.svg" alt="Twitter Logo" width={20} height={16} />
      </a>
      </div>
    </div>
  )
}

export default Header