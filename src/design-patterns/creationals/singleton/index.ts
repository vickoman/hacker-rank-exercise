import config from "./config.json";

/**
 * 
 * the singleton pattern is knowing to make reference to itselft
 * save the reference to itself, so when you need to call again,
 * it should return the reference saved and not another intance.
 * 
 */
export default class MyConfiguration {

    private static instance: MyConfiguration;

    private static _connectionString: string;
    private static _environment: string;
    private static _apiUrl: string;

    // Disable constructor. witch to private to keep hide.
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