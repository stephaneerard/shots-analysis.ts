console.log('loading %s', __filename);

import {CompanyRepository} from "../../repositories/CompanyRepository";
import {setupApplication} from './test-helper';
import {ShotsAnalysisLb4Application} from "../../application";
import {Client} from "@loopback/testlab";
import {createConnection, getManager} from "typeorm";
import * as Model from "./../../models"

describe('HelloController (unit)', () => {
    let app: ShotsAnalysisLb4Application;
    let client: Client;

    before('setupApplication', async () => {
        ({app, client} = await setupApplication());
        await createConnection()
    });

    after(async () => {
        await app.stop();
    });


    it('retrieves details of a product', async () => {
        const repo = new CompanyRepository();
        await repo.doSomething()
    });

    it('retrieve company', async () => {
        const data = await getManager().getRepository(Model.Country).createQueryBuilder('c').getMany()

        console.log(data)
    });
});
