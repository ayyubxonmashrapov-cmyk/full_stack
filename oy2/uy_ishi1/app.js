import {createServer} from 'http';
import { getData, addData } from './file.js';

const PORT = 3001;

createServer(async (req, res) => {
    try {
        res.setHeader('Content-type', 'application/json');
        const users = await getData();

        if (req.method === 'GET' && req.url === '/users'){
            return res.writeHead(200).end(JSON.stringify(users))
        }   
        if (req.method === 'POST' && req.url === '/user'){
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });

            req.on('end', async () => {
                const newUser = {
                    id : users ? users[users.length - 1]?.id + 1 : 1, 
                    ...JSON.parse(body)
                }

                users.push(newUser);
                await addData(users)
                return res.writeHead(201).end(JSON.stringify(newUser))
            });
        }
        
        if (req.method === 'PUT' && req.url.startsWith('/userup/')){
            const id = +req.url.split('/')[2];
            const index = users.findIndex(el => el.id === id);
            if (index === -1){
                return res.writeHead(404).end(JSON.stringify({
                    massage: 'User not found'
                }));
            }

            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });

            req.on('end', async () => {
                users[index] = { id, ...JSON.parse(body)}
                await addData(users)
                return res.writeHead(201).end(JSON.stringify(users[index]))
            })
        }
        
        if (req.method === 'DELETE' && req.url.startsWith('/userdel')){
            const id = +req.url.split('/')[2];
            const index = users.findIndex(el => el.id === id);

            if (index === -1){
                return res.writeHead(404).end(JSON.stringify({
                    massage: 'User not found'
                }));
            }

            users.splice(index, 1)
            await addData(users)
            return res.writeHead(201).end(JSON.stringify(users[index]))
        }
        

        else{
            return res.writeHead(404).end(JSON.stringify({
                message: 'Page not found'
            }));
        }
            
    }catch(err){
        return res.end(JSON.stringify({
            massage : err.massage
    }));
    }

}).listen(PORT, () => {console.log("server is ranning")})