import styles from './styles.module.css';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Head from 'next/head';
import { Textarea } from '../../components/textArea/textArea';
import { FiShare2 } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { ChangeEvent, useState } from 'react';

export default async function Page() {
  const session = await getServerSession();
  if(!session?.user) {
    redirect("/");
  }

  const [input, setInput] = useState('');
  const [publicTask, setPublicTask] = useState(false);

  function handleChangePublic(e: ChangeEvent<HTMLInputElement>) {
    setPublicTask(e.target.checked);
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
              <Textarea placeholder='Digite qual sua tarefa...' value={input} onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value) }/>
              <div className={styles.checkboxArea}>
                <input type='checkbox' className={styles.checkbox} checked={publicTask} onChange={handleChangePublic} />
                <label className={styles.label}>Deixar tarefa publica?</label>
              </div>
              <button type='submit' className={styles.button}>Registrar</button>
            </form>
          </div>
        </section>

        <section className={styles.taskContainer}>
          <h1>Minhas tarefas</h1>

          <article className={styles.task}>
            <div className={styles.tagContainer}>
              <label className={styles.tag}>PUBLICO</label>
              <button className={styles.shareButton}>
                <FiShare2 size={22} color='blue'/>
              </button>
            </div>
          
            <div className={styles.taskContent}>
              <p>minha primeira tarefa de ex</p>
              <button className={styles.trashButton}>
                <FaTrash size={24} color='red'/>
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
