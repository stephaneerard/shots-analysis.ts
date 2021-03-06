import {get, Request, ResponseObject, RestBindings} from '@loopback/rest';
import {inject} from '@loopback/context';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
    description: 'Ping Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'PingResponse',
                properties: {
                    greeting: {type: 'string'},
                    date: {type: 'string'},
                    url: {type: 'string'},
                    headers: {
                        type: 'object',
                        properties: {
                            'Content-Type': {type: 'string'},
                        },
                        additionalProperties: true,
                    },
                },
            },
        },
    },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
    constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {
    }

    // Map to `GET /ping`
    @get('/ping', {
        responses: {
            '200': PING_RESPONSE,
        },
    })
    async ping(): Promise<object> {
        // Reply with a greeting, the current time, the url, and request headers
        return {
            greeting: await greetin(),
            date: new Date(),
            url: this.req.url,
            headers: Object.assign({}, this.req.headers),
        };
    }
}

async function greetin(): Promise<string> {
    return 'Hello from LoopBack @' + (new Date()).toISOString() + " " + (new Date()).toISOString() + (new Date()).toISOString();
}
