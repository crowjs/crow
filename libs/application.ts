/**
 * Module dependencies.
 */

import { EventEmitter } from "https://raw.githubusercontent.com/denoland/deno/master/std/node/events.ts";
import  Context  from "./context.ts";
import  Response from "./response.ts";
import  Request  from "./request.ts";

/**
 * Options interface for
 * Application Class
 */
interface Options {
    proxy: boolean
    subdomainOffset: number
    proxyIpHeader: string
    maxIpsCount: number
    env: string
    keys: string[]
}

/**
 * Expose `Application` class.
 * Inherits from `EventEmitter`.
 */
export default class Application extends EventEmitter{

    proxy: boolean
    subdomainOffset: number
    proxyIpHeader: string
    maxIpsCount: number
    env: string
    keys:string[] = [""]
    middleware:string[]
    Context:Context
    Request:Request
    Response:Response

    constructor(options: Options) {
        super();
        options = options || {};
        this.proxy = options.proxy || false;
        this.subdomainOffset = options.subdomainOffset || 2;
        this.proxyIpHeader = options.proxyIpHeader || 'X-Forwarded-For';
        this.maxIpsCount = options.maxIpsCount || 0;
        this.env = options.env || Deno.env.get("CROW_ENV") || 'development';
        if (options.keys) this.keys = options.keys;
        this.middleware = [];
        this.Context = Context;
        this.Request = Request;
        this.Response = Response;
       /* if (util.inspect.custom) {
          this[util.inspect.custom] = this.inspect;
        }*/
        console.log(options)
      }
    
}
