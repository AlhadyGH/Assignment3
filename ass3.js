// //1
// const fs= require('fs');

// const readable= fs.createReadStream("./big.txt",{
//     encoding:'utf8'
// });
// readable.on("data",(chunk)=>{
//     console.log('Chunk',chunk);
// });

// readable.on('end', () => {
//   console.log('Finished reading file');
// });
// readable.on('error', (err) => {
//   console.log('Error:', err.message);
// });
// /////////////////////////////////////////////////////////////////////////////////////
// //2

// const readable= fs.createReadStream('./source.txt');
// const writable=fs.createWriteStream('./source.txt');
// readable.pipe(writable);

// writable.on('finish', () => {
//   console.log('File copied using streams');
// });


// readable.on('error', (err) => {
//   console.log('Error reading:', err.message);
// });

// writable.on('error', (err) => {
//   console.log('Error writing:', err.message);
// });

// /////////////////////////////////////////////////////////////////////////////////////
// //3
// const zlib=require('zlib');

// const readble =fs.createReadStream('./data.txt');
// const gzip=zlib.createGzip();
// const writable =fs.createWriteStream('./data.txt.gz');
// readable.pipe(gzip).pipe(writable);
// writable.on('finish', () => {
//   console.log('File compressed successfully');
// });
// readable.on('error', (err) => {
//   console.log('Read error:', err.message);
// });

// gzip.on('error', (err) => {
//   console.log('Compression error:', err.message);
// });

// writable.on('error', (err) => {
//   console.log('Write error:', err.message);
// });
// /////////////////////////////////////////////////////////////////////////////////////
// //1
// const http = require('http');

// const port = 8080;


// let u = [];

// const server = http.createServer((req, res) => {
//   const { method, url } = req;


//   if (method === "POST" && url === "/users") {
//     let b = "";

//     req.on("data", c => {
//       b += c.toString();
//     });

//     req.on("end", () => {
//       try {
//         const nu = JSON.parse(b);

     
//         const ex = u.some(x => x.email === nu.email);
//         if (ex) {
//           res.writeHead(400, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ m: "User already exists" }));
//           return;
//         }

        
//         const id = u.length ? u[u.length - 1].id + 1 : 1;
//         const toAdd = { id, ...nu };
//         u.push(toAdd);
//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(toAdd));

//       } catch (err) {
       
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ m: "Invalid JSON" }));
//       }
//     });

//   } else {
   
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
// /////////////////////////////////////////////////////////////////////////////////////
// //2 

//   if (method === "PATCH" && url.startsWith("/user/")) {
//     const id = parseInt(url.split("/")[2]);
//     let users = readUsers();
//     const idx = users.findIndex(u => u.id === id);
//     if (idx === -1) {
//        res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User ID not found." }));
//       return;
//     }
//     let body = "";
//     req.on("data", chunk => body += chunk.toString());
//     req.on("end",  () => {
//       try {
//             const data = JSON.parse(body);
//           users[idx] = { ...users[idx], ...data };
//          writeUsers(users);
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "User updated successfully." }));

//       } catch {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Invalid JSON" }));
//       }
//     });
//     return;
//   }

//   res.writeHead(404, { "Content-Type": "text/plain" });
//   res.end("Not Found");
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



// /////////////////////////////////////////////////////////////////////////////////////
// //3

// if (method === "DELETE" && url.startsWith("/user/")) {
//   const id = parseInt(url.split("/")[2]);
//   let users = readUsers();
//   const idx = users.findIndex(u => u.id === id);

//   if (idx === -1) {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "User ID not found." }));
//     return;
//   }
//   users.splice(idx, 1); 
//   writeUsers(users);

//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ message: "User deleted successfully." }));
//   return;
// }
// /////////////////////////////////////////////////////////////////////////////////////
// //4
// if (method === "GET" && url === "/user") {
//   const users = readUsers();
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(users));
//   return;
// }
// /////////////////////////////////////////////////////////////////////////////////////
// //5
// if (method === 'GET' && url.startsWith('/user/')) {
//     const userId = parseInt(url.split('/')[2]);
//     const users = readUsers();
//     const foundUser = users.find(u => u.id === userId);
//     if (!foundUser) {
//       res.writeHead(404, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ message: 'User not found.' }));
//       return;
//     }
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(foundUser));

//   } else {
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Route not found.' }));
//   }
// server.listen(port, () => {
// console.log(`Server running on port ${port}`);
// });

// /////////////////////////////////////////////////////////////////////////////////////
// //1
// This allows it to do many things at the same time without the program stopping, even though JavaScript only works on one thread (Single Thread)./////////////////////////////////////////////////////////////////////////////////////
// //2
// Libuv is a library that provides an event loop and handles asynchronous I/O operations in Node.js. It allows Node.js to perform non-blocking operations, enabling it to handle multiple tasks concurrently without blocking the main thread.
// It works on a single thread, but it may need to do many things at the same time, such as:
// /////////////////////////////////////////////////////////////////////////////////////
// //3
// When you write asynchronous code (e.g., reading a file, making an HTTP request, or setting a timeout), Node.js doesn't wait for the process to finish; it immediately executes the next code.

// libuv handles the task. Every I/O operation or asynchronous timer is passed to libuv. Event Loop monitors the process.

// /////////////////////////////////////////////////////////////////////////////////////
// //4
// Call Stack This is where Node.js executes code.

// It operates as a LIFO (Last In, First Out) function, meaning the last function to enter is the first to exit.

// Event Queue This is where asynchronous callbacks are placed after their operations are completed. When the call stack is empty, the event loop takes the first callback from the event queue and pushes it onto the call stack for execution.

// event loop continuously checks the call stack and event queue. If the call stack is empty, it takes the first callback from the event queue and pushes it onto the call stack for execution. This allows Node.js to handle multiple asynchronous operations without blocking the main thread, ensuring efficient performance even when dealing with I/O-bound tasks.

// /////////////////////////////////////////////////////////////////////////////////////
// //5
// Node.js is single-threaded for JavaScript execution, but under the hood it uses libuv — a C library that maintains a pool of real OS threads to handle operations that can't be done asynchronously by the OS itself.

// /////////////////////////////////////////////////////////////////////////////////////
// //6

// The concurrent code stops everything else until it finishes

// Any CPU- or I/O-intensive process will stop the event loop
// Non-blocking operations: Node.js sends the operation to libuv. If it's a network operation, it uses OS async. If it's a heavy operation, it uses a Thread Pool. The Event Loop monitors the operation. After it's complete, the callback is placed on the Event Queue and executed when the Call Stack is empty.

// /////////////////////////////////////////////////////////////////////////////////////
// //
// 1
// class Solution {
// public:
//     int majorityElement(vector<int>& nums) {
//         int candidate = 0;
//         int count = 0;

//         for (int num : nums) {
//             if (count == 0) {
//                 candidate = num;
//             }

//             if (num == candidate) {
//                 count++;
//             } else {
//                 count--;
//             }
//         }

//         return candidate;
//     }
// };
// accepted    



