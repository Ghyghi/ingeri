import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      {/* Address bar */}
      <div className={styles.addressBar}>
        <div className={styles.addrGrid}>
          <div className={styles.addrBlock}>
            <span className={`${styles.abBadge} ${styles.teal}`}>La P&apos;tite Crèche Ingeri</span>
            <h4>La P&apos;tite Crèche Ingeri</h4>
            <div className={styles.addrRow}><span>📍</span><span>Adresse à compléter, Kigali, Rwanda</span></div>
            <div className={styles.addrRow}><span>📞</span><span>Téléphone à compléter</span></div>
            <div className={styles.addrRow}><span>✉️</span><span>creche@ingeri.rw</span></div>
            <div className={styles.addrRow}><span>🕐</span><span>Lun–Ven : 7h00 – 18h00</span></div>
          </div>
          <div className={styles.addrBlock}>
            <span className={`${styles.abBadge} ${styles.pink}`}>Ingeri International School</span>
            <h4>Ingeri International School</h4>
            <div className={styles.addrRow}><span>📍</span><span>Adresse à compléter, Kigali, Rwanda</span></div>
            <div className={styles.addrRow}><span>📞</span><span>Téléphone à compléter</span></div>
            <div className={styles.addrRow}><span>✉️</span><span>maternelle@ingeri.rw</span></div>
            <div className={styles.addrRow}><span>🕐</span><span>Lun–Ven : 7h00 – 17h30</span></div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footGrid}>
          <div className={styles.footBrand}>
            <div className={styles.footLogo}>INGERi</div>
            <p>Grandir avec amour, foi et excellence. Deux campus à Kigali pour vos enfants de 6 mois à 5 ans.</p>
            <div className={styles.socials}>
              <Link href="#" className={styles.socialLink}>Facebook</Link>
              <Link href="#" className={styles.socialLink}>Instagram</Link>
              <Link href="#" className={styles.socialLink}>WhatsApp</Link>
            </div>
          </div>

          <div className={styles.footCol}>
            <h4>Accueil</h4>
            <ul>
              <li><Link href="/#accueil">Bienvenue</Link></li>
              <li><Link href="/#mission">Mission &amp; Vision</Link></li>
              <li><Link href="/#valeurs">Nos valeurs</Link></li>
              <li><Link href="/#direction">Mot de la direction</Link></li>
              <li><Link href="/#temoignages">Témoignages</Link></li>
            </ul>
          </div>

          <div className={styles.footCol}>
            <h4>Campus &amp; Programmes</h4>
            <ul>
              <li><Link href="/campus#creche">La P&apos;tite Crèche</Link></li>
              <li><Link href="/campus#maternelle">Ingeri International School</Link></li>
              <li><Link href="/programmes#creche">Programme crèche</Link></li>
              <li><Link href="/programmes#maternelle">Programme maternelle</Link></li>
            </ul>
          </div>

          <div className={styles.footCol}>
            <h4>Informations</h4>
            <ul>
              <li><Link href="/presentation">Présentation</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/admissions#faq">FAQ</Link></li>
              <li><Link href="/contact">Contactez-nous</Link></li>
              <li><Link href="/espace-parents">Espace parents</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footBottom}>
          <span>© 2025 Ingeri Schools – Tous droits réservés</span>
          <span>Conçu avec ❤️ à Kigali, Rwanda</span>
        </div>
      </footer>
    </>
  )
}
