export interface IAgensEnterpriseManager {
  content: string[];
  title: string;
}

export interface IAgensHaManager {
  image: string;
}

export interface IAgensEnterprise {
  title: string;
  description: string;
  agensHaManager: IAgensHaManager;
  agensEnterpriseManager: IAgensEnterpriseManager[];
}

export const AgensData = {
  title: "Agens Enterprise Package",
  description:
    "Agens Enterprise Package comes with a high availability management server that\nsupports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently.",
  agensHaManager: {
    image:
      "https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png",
  },
  agensEnterpriseManager: [
    {
      title: "Backup/Restore",
      content: [
        "provides a convenient interface for backup & restore",
        "provides backup & restore features for DB and table objects",
      ],
    },
    {
      title: "DB Monitoring Dashboard",
      content: [
        "monitors real-time session & transaction lock",
        "provides status for server CPU & memory",
      ],
    },
    {
      title: "Schedule Management",
      content: [
        "provides module for script, SQL job, and scheduling management",
        "provides UX dedicated to scheduling",
      ],
    },
    {
      title: "Database Audit",
      content: [
        "enables auditing via user interface",
        "view audit results via user interface",
      ],
    },
    {
      title: "SQL Monitoring",
      content: [
        "collects query statistics required for performance analysis",
        "extracts monitoring results in query",
      ],
    },
    {
      title: "Performance Management",
      content: [
        "monitors and collects operation status & statistical data",
        "provides status reports required for improving performance",
      ],
    },
  ],
};
