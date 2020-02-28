import {ShotsAnalysisLb4Application} from './application';
import {ApplicationConfig} from '@loopback/core';
import * as Config from "@frenchex/config-api";
import * as path from "path";

export {ShotsAnalysisLb4Application};

export async function main(options: ApplicationConfig = {}) {
    const config = await Config.fromFile({
        file: path.join(__dirname, '../config/config.json'),
        env: {env: process.env['NODE_ENV'] || 'prod'}
    });

    const app = new ShotsAnalysisLb4Application(options);
    app.config = config;
    await app.boot();
    await app.start();

    const env = await config.get<string>('env');
    const fqdn = await config.get<string>('fqdn.string');
    console.log(`env ${env}`);
    console.log(`fqdn ${fqdn}`);

    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);

    return app;
}
