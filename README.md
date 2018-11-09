# webpack-middleware-repro
File emitting webpack middleware repro

This repository shows that a basic setup of Webpack Dev Middleware in .NET Core 2.1 does in fact write files to disk. To set this up:

1. Clone
1. `cd webpack-middleware-repro\WebpackMiddlewareRepro`
1. `npm install`
1. `dotnet run`

Then simply modify either js file inside `ClientApp\*` and watch what happens to `wwwroot\dist\main.js` - if you delete the file, it'll just come back every time a change is made.

What's also interesting is that if you delete the file _after_ it is generated, it'll continue to load if you just refresh the page.

Is this expected? I am referencing the following:

https://github.com/aspnet/JavaScriptServices/tree/master/src/Microsoft.AspNetCore.SpaServices#webpack-dev-middleware

> If you're using webpack, the webpack dev middleware feature included in Microsoft.AspNetCore.SpaServices will streamline your development process. It intercepts requests that would match files built by webpack, and dynamically builds those files on demand. *They don't need to be written to disk - they are just held in memory and served directly to the browser.*
