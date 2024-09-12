const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) => {
   
    if (req.url === '/' || req.url === '/index.html' ) {
      //serve index.html
      serverStaticFile(res, 'project/index.html', 'text/html');
    } else if (req.url === '/node_info.json') {
        // serve nodejs_info.json
        serverStaticFile(res, 'nodejs_info.json', 'application/json');
        // serve css file
    } else if (req.url.startsWith('/css/')) {
        const cssPath = path.join(__dirname, 'project', req.url);
         serverStaticFile(res, cssPath, 'text/css');
         //serve jscript file
     } else if (req.url.startsWith('/js/')){
      const jsPath = path.join(__dirname, 'project', req.url);
      serverStaticFile(res, jsPath, 'text/javascript');
         //404 error
     } else {
        res.writeHead(404, {'content-Type': 'text/plain'});
        res.end('404 not found');
     }
 });
   
      function serverStaticFile(res,filePath, contentType) {
      fs.readFile(filePath, (err, data) => {
        if (err){
        res.writeHead(500, {'content-Type' : 'text/plain'});
        res.end('internal server Error');
        }else {
            res.writeHead(200, {'content-Type' : contentType});
            res.end(data);
        }
      });

      }

     const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




       // keep for future
   /* fs.readFile(path.join(__dirname,'project', 'index.html'), (err, data) =>{
     
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });   //handling errors
        res.end('internal Server error');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } */