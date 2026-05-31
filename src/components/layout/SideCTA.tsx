import Link from 'next/link'
import styles from './SideCTA.module.css'

export default function SideCTA() {
  return (
    <div className={styles.sideCta}>
      <Link href="/contact" className={`${styles.sideBtn} ${styles.teal}`}>
        Nous contacter
      </Link>
      <Link href="/admissions" className={`${styles.sideBtn} ${styles.pink}`}>
        Candidater
      </Link>
      <Link href="/presentation#localisations" className={`${styles.sideBtn} ${styles.gold}`}>
        Nous visiter
      </Link>
    </div>
  )
}
