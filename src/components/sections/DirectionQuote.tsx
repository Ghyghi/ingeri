import styles from './DirectionQuote.module.css'
import Image from 'next/image'

export default function DirectionQuote() {
  return (
    <div id="direction" className={styles.wrapper}>
      <div className="container">
        <span className="tag">Direction</span>
        <h2 className="sec-title">Un mot de la <span>direction</span></h2>
        <div className={styles.strip}>
          <div className={styles.photo}>
              <Image src="/principal.jpg" alt="Directrice Ingeri" fill style={{objectFit:'cover'}} />
            📷 Photo de la directrice / fondatrice
          </div>
          <div className={styles.text}>
            <div className={styles.quoteMark}>&ldquo;</div>
            <blockquote>
              {/* TODO: replace with real quote from backend or CMS */}
              Chez Ingeri, nous croyons profondément que les premières années de la vie d&apos;un enfant sont
              les plus déterminantes. C&apos;est pourquoi nous avons créé un espace où l&apos;amour, la foi et
              l&apos;excellence ne sont pas de simples mots, mais le cœur de chaque journée. Chaque enfant
              qui franchit nos portes est une promesse d&apos;avenir — et nous avons la responsabilité sacrée
              de l&apos;honorer.
            </blockquote>
            {/* TODO: replace with real name/role */}
            <p className={styles.dirName}>John Doe</p>
            <p className={styles.dirRole}>Directeur, Ingeri Schools</p>
          </div>
        </div>
      </div>
    </div>
  )
}
