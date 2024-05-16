import styles from './styles.module.css';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Head from 'next/head';
import { Textarea } from '../../components/textArea/textArea';

export default async function Page() {
  const session = await getServerSession();
  if(!session?.user) {
    redirect("/");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual sua tarefa?</h1>
            <form>
              <Textarea placeholder='Digite qual sua tarefa...' />
              <div className={styles.checkboxArea}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>Deixar tarefa publica?</label>
              </div>
              <button type='submit' className={styles.button}>Registrar</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
