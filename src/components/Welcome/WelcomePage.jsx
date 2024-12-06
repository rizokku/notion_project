import { useEffect } from 'react';
import style from './WelcomePage.module.css';
import { useState } from 'react';

export const WelcomePage = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main className={style.containerWelcomePage}>
      <h1 className={style.welcomeText}>Добро пожаловать в {animation && <span className={style.notionText} >Notion</span>}</h1>
      <section className={style.buttonsSelect}>
        <h3 className={style.textPriority}>Что предпочитаете?</h3>
        <a href='/login' className={style.loginButton}>Войти</a>
        <a href='/register' className={style.registrationButton}>Зарегистрироваться</a>
      </section>
    </main>
  );
};