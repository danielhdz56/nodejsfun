# nodejsfun
<h4>This is a sandbox for personal projects as I learn nodejs</h4>
<h3>Setting up a server</h3>
<h5>Main Objective</h5>
<p>You can make your computer a server by using node.js and the terminal</p>
<h5>Modules</h5>
<p>http is an example of a module</p>
<p>In order to call a module we have use the keyword, require</p>
<p>Example: var http = require('http');</p>
<br>
<p>You can make your own modules</p>
<p>Look at myfirstmodule.js to see how a module is created and then look at demo_module.js to see it in action</p>
<h5>Node.js as a Web Server</h5>
<p>The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client</p>
<h5>URL Module</h5>
<p>The url module provides a variety of ways to manipulate the url</p>
<p>The url.parse method allows us to call on the url and "split" that url into nice chuncks that we can display back to the client.</p>
<p>For Example: http://localhost:8080/?year=2018&month=July&day=9</p>
<p>If we declare a variable q = url.parse(req.url, true).query</p>
<p>and then call on it like so</p>
<p>console.log(q.year) we would recieve an output of 2018</p>


