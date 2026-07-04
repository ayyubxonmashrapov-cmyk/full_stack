import { join } from 'path';
import { readFile, writeFile } from 'fs/promises';

const filePath = join(process.cwd(), 'users.json');

export async function getData(){
    try{
        const data = await readFile(filePath, 'utf-8') ;
        console.log('ishladi')
        return data ? JSON.parse(data) : [];
    }catch(error){
        console.log('Error on get data:', error)
    }
}

export async function addData(data){
    try {
        await writeFile(filePath, JSON.stringify(data, null, 2));        
    }catch(err){
        console.log('Error in addData', err)
    }
}