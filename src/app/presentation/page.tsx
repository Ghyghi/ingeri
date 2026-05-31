import Link from 'next/link'
import Image from 'next/image'
import styles from './presentation.module.css'

export default function PresentationPage() {
  return (
    <>
      {/* Intro */}
      <section className={styles.intro}>
        <div className="container">
          <span className="tag">Qui sommes-nous</span>
          <h2 className="sec-title">Notre <span>présentation</span></h2>
          <p className="sec-sub">
            Tout ce qui fait l&apos;identité profonde d&apos;Ingeri : notre philosophie, notre équipe et nos engagements.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`${styles.section} alt`} id="mission">
        <div className="container">
          <span className="tag">Notre raison d&apos;être</span>
          <h2 className="sec-title">Mission &amp; <span>Vision</span></h2>
          <div className={styles.mvGrid}>
            <div className={styles.mvBlock}>
              <h3>Notre mission</h3>
              <p>Semer les graines de l&apos;excellence dès la petite enfance. Nous accompagnons chaque enfant dans son développement global — spirituel, affectif, intellectuel, social et moteur — dans un environnement sécurisé, aimant et stimulant.</p>
            </div>
            <div className={`${styles.mvBlock} ${styles.pk}`}>
              <h3>Notre vision</h3>
              <p>Devenir un réseau d&apos;espaces éducatifs de référence au Rwanda et en Afrique, reconnus pour la qualité pédagogique, l&apos;ancrage chrétien et l&apos;innovation adaptée à notre contexte local.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grands principes */}
      <section className={styles.section} id="principes">
        <div className="container">
          <span className="tag">Notre philosophie</span>
          <h2 className="sec-title">Nos grands <span>principes</span></h2>
          <div className={styles.principesGrid}>
            {[
              { icon: '🌱', title: 'Centré sur l\'enfant', desc: 'Chaque enfant est unique. L\'adulte observe, encourage et soutient sans imposer.' },
              { icon: '⛪', title: 'Fondation chrétienne', desc: 'Patience, respect, humilité, joie et pardon au cœur de chaque journée.' },
              { icon: '👐', title: 'Le lien', desc: 'Enfant–éducateur, enfant–famille : la confiance partagée sécurise.' },
              { icon: '🌿', title: 'Lien à la nature', desc: 'Jardinage, objets naturels : la nature nourrit l\'émerveillement.' },
              { icon: '🌟', title: 'Autonomie et dignité', desc: 'L\'enfant apprend à « faire seul » et à se faire confiance.' },
            ].map((p) => (
              <div key={p.title} className={styles.ppBlock}>
                <div className={styles.pbIcon}>{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines */}
      <section className={`${styles.section} ${styles.altBg}`} id="domaines">
        <div className="container">
          <span className="tag">Ce que nous cultivons</span>
          <h2 className="sec-title">Domaines d&apos;<span>apprentissage</span></h2>
          <div className={styles.domainesGrid}>
            {[
              { icon: '🗣️', title: 'Langage & expression' },
              { icon: '🔢', title: 'Logique & premiers nombres' },
              { icon: '🎨', title: 'Créativité & sens' },
              { icon: '🤲', title: 'Vie pratique & autonomie' },
              { icon: '💞', title: 'Vivre ensemble & foi' },
              { icon: '🌍', title: 'Éveil à la nature' },
              { icon: '🏃', title: 'Développement moteur' },
              { icon: '🎵', title: 'Musique & rythme' },
            ].map((d) => (
              <div key={d.title} className={styles.domBlock}>
                <div className={styles.di}>{d.icon}</div>
                <h4>{d.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.section} id="leadership">
        <div className="container">
          <span className="tag">Direction</span>
          <h2 className="sec-title">Le <span>Leadership</span></h2>
          <div className={styles.ldGrid}>
            <div className={styles.ldPhoto}>
              <Image src="/Principal.jpg" fill style={{objectFit:'cover'}} alt="Fondatrice" />
              📷 Photo de la fondatrice / directrice
            </div>
            <div className={styles.ldText}>
              <p>Chez Ingeri, le leadership est au service de l&apos;enfant. Chaque décision pédagogique est guidée par une seule question : est-ce le meilleur pour l&apos;enfant ?</p>
              <p>Notre équipe dirigeante croit profondément que l&apos;éducation précoce est l&apos;investissement le plus précieux que l&apos;on puisse faire pour une génération.</p>
              <div className={styles.ldQuote}>
                <p>&ldquo;Chaque enfant est une promesse d&apos;avenir. Notre rôle est d&apos;honorer cette promesse.&rdquo;</p>
                <cite>— Fondatrice, Ingeri Schools</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className={`${styles.section} ${styles.altBg}`} id="equipe">
        <div className="container">
          <span className="tag">Les visages d&apos;Ingeri</span>
          <h2 className="sec-title">Notre <span>équipe</span></h2>
          <p className="sec-sub">Des femmes engagées, mères et professionnelles, au service de vos enfants.</p>
          {/* TODO: fetch team from backend API */}
          <div className={styles.equipeGrid}>
            {[
              { photo: <Image src="/teacher-1.jpg" fill style={{objectFit:'cover'}} alt="Membre de l'équipe" />, name: 'Jane Doe', role: 'Directrice pédagogique' },
              { photo: <Image src="/teacher-2.jpg" fill style={{objectFit:'cover'}} alt="Membre de l'équipe" />, name: 'Jane Smith', role: 'Éducatrice crèche' },
              { photo: <Image src="/teacher-3.jpg" fill style={{objectFit:'cover'}} alt="Membre de l'équipe" />, name: 'Alice Johnson', role: 'Enseignante maternelle' },
              { photo: <Image src="/teacher-4.jpg" fill style={{objectFit:'cover'}} alt="Membre de l'équipe" />, name: 'Bob Williams', role: 'Coordinatrice' },
            ].map((m, i) => (
              <div key={i} className={styles.teamBlock}>
                <div className={styles.teamPhoto}>{m.photo}</div>
                <div className={styles.teamInfo}>
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localisations */}
      <section className={styles.section} id="localisations">
        <div className="container">
          <span className="tag">Nous trouver</span>
          <h2 className="sec-title">Nos <span>localisations</span></h2>
          <div className={styles.locsGrid}>
            <div className={styles.locBlock}>
              <div className={styles.locInfo}>
                <h3>La P&apos;tite Crèche Ingeri</h3>
                <p className={styles.locDetail}>📍 Adresse à compléter – Kigali</p>
                <p className={styles.locDetail}>📞 Tél : à compléter</p>
                <p className={styles.locDetail}>🕐 Lun–Ven : 7h00–18h00</p>
                <Link href="/contact#creche" className="btn btn-teal" style={{ marginTop: 14, fontSize: 13, padding: '9px 18px' }}>Nous contacter</Link>
              </div>
            </div>
            <div className={styles.locBlock}>
              <div className={styles.locInfo}>
                <h3 style={{ color: 'var(--pink-d)' }}>Ingeri International School</h3>
                <p className={styles.locDetail}>📍 Adresse à compléter – Kigali</p>
                <p className={styles.locDetail}>📞 Tél : à compléter</p>
                <p className={styles.locDetail}>🕐 Lun–Ven : 7h00–17h30</p>
                <Link href="/contact#maternelle" className="btn btn-pink" style={{ marginTop: 14, fontSize: 13, padding: '9px 18px' }}>Nous contacter</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrières */}
      <section className={`${styles.section} ${styles.altBg}`} id="carrieres">
        <div className="container">
          <span className="tag">Rejoignez-nous</span>
          <h2 className="sec-title">Carrières chez <span>Ingeri</span></h2>
          <div className={styles.carGrid}>
            <div className={styles.carJobs}>
              <h3 className={styles.jobsTitle}>Postes vacants</h3>
              {/* TODO: fetch job listings from backend */}
              {[
                { title: 'Éducatrice de crèche', location: "La P'tite Crèche · Kigali", badge: 'Temps plein', badgeClass: 'teal' },
                { title: 'Enseignante maternelle', location: 'Ingeri International School', badge: 'Temps plein', badgeClass: 'teal' },
                { title: 'Stagiaire pédagogique', location: 'Les deux campus', badge: 'Stage', badgeClass: 'pink' },
              ].map((job, i) => (
                <div key={i} className={styles.jobRow}>
                  <div>
                    <h4>{job.title}</h4>
                    <p>{job.location}</p>
                  </div>
                  <span className={`${styles.jBadge} ${job.badgeClass === 'pink' ? styles.pk : ''}`}>{job.badge}</span>
                </div>
              ))}
              <div className={styles.teamQuote}>
                <p>&ldquo;Travailler chez Ingeri, c&apos;est sentir chaque jour que son travail a du sens.&rdquo;</p>
                <p className={styles.tqAuthor}>— Membre de l&apos;équipe</p>
              </div>
            </div>
            <div className={styles.carCta}>
              <div style={{ fontSize: 32 }}>🌟</div>
              <h3>Rejoignez la famille Ingeri</h3>
              <p>Vous partagez nos valeurs de bienveillance, d&apos;excellence et de foi ? Envoyez-nous votre candidature.</p>
              <a href="mailto:carrieres@ingeri.rw" className="btn btn-white">Envoyer ma candidature</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
