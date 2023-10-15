declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BRAINSTORM_SERVER_PORT?: number;
      BRAINSTORM_SERVER_DATABASE_URL?: string;
      BRAINSTORM_SERVER_DATABASE_PORT: number;
      BRAINSTORM_SERVER_ADMINISTRATOR: string;
      NODE_ENV: 'development' | 'production';
      PWD: string;
    }
  }
}
