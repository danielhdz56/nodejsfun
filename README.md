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
<br>
<h3>File Server</h3>
<h5>Modules</h5>
<p>File System Module</p>
<p>The file system module allows you to work with the file system on your computer</p>
<p>Common uses for the File System Module</p>
<ul>
	<li>Read Files</li>
	<li>Create Files</li>
	<li>Update Files</li>
	<li>Delete Files</li>
	<li>Rename Files</li>
</ul>
<p>fs.appendFile() is used to add something to the file in question, note if there is no file with that specific name one will be created</p>
<br>
<p>fs.open() methods takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created.</p>
<br>
<p>fs.writeFile() is used to replace the specified file and content if it exists. If the file does not exists a new file, containing the specified content, will be created</p>
<br>
<p>fs.unlink() is used to delete a file with the File System module</p>
<br>
<p>fs.rename() is used to rename a file with the File System module</p>
<br>
<h5>Uploading files</h5>

