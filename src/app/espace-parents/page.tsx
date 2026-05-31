'use client'

import styles from './espace-parents.module.css'

export default function EspaceParentsPage() {
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: POST /api/auth/login
    const formData = new FormData(e.currentTarget)
    console.log('Login attempt:', formData.get('email'))
    alert('Fonctionnalité de connexion à implémenter.')
  }

  return (
    <section className={styles.section} id="espace-parents">
      <div className="container">
        <span className="tag">Espace réservé</span>
        <h2 className="sec-title">Espace <span>Parents</span></h2>
        <p className="sec-sub">Ingeri Parents : ensemble pour grandir sereinement.</p>

        <div className={styles.layout}>
          <div className={styles.loginPanel}>
            <div className={styles.loginIcon}>👨‍👩‍👧</div>
            <h3>Connexion parent</h3>
            <p>Accédez à votre espace personnel pour suivre l&apos;évolution de votre enfant.</p>
            {/* TODO: connect to /api/auth/login */}
            <form onSubmit={handleLogin} className={styles.loginForm}>
              <div className={styles.fg}>
                <label>Email parent</label>
                <input type="email" name="email" placeholder="votre@email.com" required />
              </div>
              <div className={styles.fg}>
                <label>Mot de passe</label>
                <input type="password" name="password" placeholder="••••••••" required />
              </div>
              <button type="submit" className={`btn btn-teal ${styles.loginBtn}`}>
                Se connecter
              </button>
            </form>
            <a href="/contact" className={styles.forgotLink}>
              Mot de passe oublié ? Contactez-nous
            </a>
          </div>

          <div className={styles.features}>
            {[
              {
                icon: '📊',
                title: 'Accès à la plateforme',
                desc: 'Suivez le développement et le quotidien de votre enfant en temps réel.',
              },
              {
                icon: '📢',
                title: 'Communiqués & annonces',
                desc: "Actualités, événements et messages importants de l'école.",
              },
              {
                icon: '📸',
                title: 'Galerie photos',
                desc: 'Revivez les beaux moments partagés par votre enfant.',
              },
              {
                icon: '🧰',
                title: 'Boîte à outils parentale',
                desc: "Ressources et conseils pour prolonger l'aventure Ingeri à la maison.",
              },
            ].map((f) => (
              <div key={f.title} className={styles.feat}>
                <span className={styles.featIcon}>{f.icon}</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
