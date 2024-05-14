"use client"
import styles from './styles.module.css';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export function Header() {

const { data: session, status } = useSession();

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">
            <h2 className={styles.logo}>
              Tarefas<span>+</span>
            </h2>
          </Link>
        <Link href="/dashboad" className={styles.link}>
          Meu painel
        </Link>
        </nav>
        { status === "loading" ? (
          <>
          </>
        ): session ? (
          <button className={styles.loginButton} onClick={() => signOut()}>
          Olá {session?.user?.name}
        </button>
        ) : (
          <button className={styles.loginButton} onClick={() => signIn("github")}>
          Entrar
        </button>
        )}
      </section>
    </header>
  )
}