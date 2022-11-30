import {readFile} from "fs/promises";

console.log(import.meta.url);

const filepath = new URL('./nodedemo.html', import.meta.url);
const data = await readFile(filepath,{ encoding: 'utf8' });
console.log(data ,);