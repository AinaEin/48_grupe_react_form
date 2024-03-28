import style from "./Form.module.css";

export function RegisterForm() {
  return (
    <form className={style.form}>
      <div className={style.formRow}>
        <label className={style.label} htmlFor="">
          Username
        </label>
        <input className={style.input} type="text" placeholder="Eg. John" />
      </div>
      <div className={style.formRow}>
        <label className={style.label} htmlFor="">
          Email
        </label>
        <input
          className={style.input}
          type="email"
          placeholder="Eg. John@cena.com"
        />
      </div>
      <div className={style.formRow}>
        <label className={style.label} htmlFor="">
          Password
        </label>
        <input
          className={style.input}
          type="password"
          placeholder="youcantseemenow"
        />
      </div>
      <div className={style.formRow}>
        <label className={style.label} htmlFor="">
          Repeat password
        </label>
        <input
          className={style.input}
          type="password"
          placeholder="youcantseemenow"
        />
      </div>
      <div className={style.formRow}>
        <button className={style.button} type="submit">
          Register
        </button>
      </div>
    </form>
  );
}
