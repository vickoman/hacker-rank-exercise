import config from "./config.json";

export default class MyConfiguration {
    /**
     * El patron singleton es conocido por hacer referencia a si mismo
     * Guarda la referencia asi cuando se llame retorna la referencia a guardada
     */
    private static instance: MyConfiguration;

    private static _connectionString: string;
    private static _environment: string;
    private static _apiUrl: string;

    private constructor() {}

    private static init(): void {
        this._connectionString = config.connectionString;
        this._environment = config.environment;
        this._apiUrl = config.apiUrl;
    }

    public static getInstance(): MyConfiguration {
        if (!this.instance) {
            this.init();
            this.instance = new MyConfiguration();
        } 
        
        return this.instance;
    }

    get getConnectionString(): string {
        return MyConfiguration._connectionString;
    }

    get getApiUrl(): string {
        return MyConfiguration._apiUrl;
    }

    get getEnvironment(): string {
        return MyConfiguration._environment;
    }
}