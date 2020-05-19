// Copyright 2020 the Crow authors. All rights reserved. MIT license.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

import { EventEmitter } from "https://deno.land/std@0.51.0/node/events.ts";
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
