import { test, expect } from '@playwright/test'
test('put api' , async({request})=>{
const response=await request.put('https://jsonplaceholder.typicode.com/posts/1',{
    data:{
        title:'Playwright',
        body: 'this is test data',
        userId:1

    }
    
});
const Text= await response.text();
expect(Text).toContain('Playwright')
console.log(await response.json());
expect (response.status()).toBe(200);
});
test('get api test' ,async({request})=>{
const response=await request.get('https://jsonplaceholder.typicode.com/users')
expect(response.status()).toBe(200)
const text=await response.text()
expect(text).toContain('Leanne Graham')
console.log(await response.json());

});
test('post api' , async({request})=>{
const response=await request.post('https://jsonplaceholder.typicode.com/posts',{
    data:{
        title:'Playwright',
        body: 'this is test data',
        userId:1

    }
    
});
const Text= await response.text();
expect(Text).toContain('Playwright')
console.log(await response.json());
expect (response.status()).toBe(201);
});
test.only('delete api' , async({request})=>{
const response=await request.delete('https://jsonplaceholder.typicode.com/posts/1')
expect (response.status()).toBe(200);
});





