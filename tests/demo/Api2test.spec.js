import { test, expect } from '@playwright/test'
test('Api test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users')
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain('Leanne Graham')
    console.log(await response.json())
});
test('post api', async ({ request }) => {
    const res = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            "userId": 1,
            "id": 8,
            "title": "Heloo Alishba"
        }
    })
    expect(res.status()).toBe(201)
    const Text=await res.text()
    expect(Text).toContain('Heloo Alishba')
    console.log(await res.json())

})
test.only('put api' , async({request})=>{
    const Response=await request.put('https://jsonplaceholder.typicode.com/posts/1',{
        data:{
            "userId": 1,
            "id": 8,
            "title": "Updated Title here"
        }
    })
    expect(Response.status()).toBe(200)
    const title=await Response.json()
    console.log(title)
    
})
test.only('del' ,async({request})=>{
    const response=await request.delete('https://jsonplaceholder.typicode.com/posts/1')
    expect(response.status()).toBe(200)

})