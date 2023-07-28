export interface ICard {
  content: string[];
  image: string;
}

export interface IdbEngine {
  title: string;
  subtitle: string;
  content: string;
  cards: ICard[];
}

export const dbEngine: IdbEngine = {
  title: "AgensSQL DB Engine",
  subtitle: "Enhanced Data Security",
  content:
    "AgensSQL is a PostgreSQL-based DBMS that guarantees optimal security and stability.",
  cards: [
    {
      image:
        "https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png",
      content: [
        "user password policy reinforces login security",
        "excessive failed login attempts lock an account",
        "define rules for password complexity",
      ],
    },
    {
      image:
        "https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png",
      content: [
        "enhanced data security of user personal information",
        "resolve privacy issues in preparation for security audits",
        "encryption or masking with unidentifiable special characters",
      ],
    },
    {
      image: "https://bitnine.net/wp-content/uploads/2022/04/Auditing.png",
      content: [
        "monitors database activities and collects data",
        "traces object accessed or DDL & DML statements executed by a user",
        "records all actions in logs",
      ],
    },
  ],
};
