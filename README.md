# crow
Expressive HTTP middleware framework for deno.js to make web applications and APIs more enjoyable to write. Crow's middleware stack flows in a stack-like manner, allowing you to perform actions downstream then filter and manipulate the response upstream.

Only methods that are common to nearly all HTTP servers are integrated directly into Crow's small codebase. This includes things like content negotiation, normalization of node inconsistencies, redirection, and a few others.

Crow is not bundled with any middleware.
