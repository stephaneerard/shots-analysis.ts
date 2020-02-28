import {get, Request, ResponseObject, RestBindings} from '@loopback/rest';
import {inject} from '@loopback/context';

/**
 * OpenAPI response for hello()
 */
const HELLO_RESPONSE: ResponseObject = {
    description: 'Hello Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'HelloResponse',
                properties: {
                    hello: {type: 'string'},
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
 * OpenAPI response for ping()
 */
const HEY_RESPONSE: ResponseObject = {
    description: 'Hey Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'HeyResponse',
                properties: {
                    hello: {type: 'string'},
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
export class HelloController {
    constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {
    }

    @get('/hello', {
        responses: {
            '200': HELLO_RESPONSE,
        },
    })
    async hello(): Promise<object> {
        return {}
    }

    @get('/hey', {
        responses: {
            '200': HEY_RESPONSE,
        },
    })
    async hey(): Promise<object> {
        // Reply with a greeting, the current time, the url, and request headers
        return {
            hello: await greetin(),
            date: new Date(),
            url: this.req.url,
            headers: Object.assign({}, this.req.headers),
        };
    }
}

async function greetin(): Promise<string> {
    return 'Hello from LoopBack @' + (new Date()).toISOString() + " " + (new Date()).toISOString() + (new Date()).toISOString();
}
