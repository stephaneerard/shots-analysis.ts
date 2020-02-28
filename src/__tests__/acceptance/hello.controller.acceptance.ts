import {Client, expect} from '@loopback/testlab';
import {ShotsAnalysisLb4Application} from '../..';
import {setupApplication} from './test-helper';

describe('HelloController', () => {
    let app: ShotsAnalysisLb4Application;
    let client: Client;

    before('setupApplication', async () => {
        ({app, client} = await setupApplication());
    });

    after(async () => {
        await app.stop();
    });

    it('invokes GET /hello', async () => {
        const res = await client.get('/ping?msg=world').expect(200);
        expect(res.body).to.containEql({greeting: 'Hello from LoopBack'});
    });
});
