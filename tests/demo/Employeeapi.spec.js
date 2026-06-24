import {test,expect} from '@playwright/test'
test('Api test' ,async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users/1')
    expect(response.status()).toBe(200)
    const data=await response.json()
    //Verify Employee Details Exist
    expect(data.id).toBeDefined()
    expect(data.name).toBeDefined()
    expect(data.email).toBeDefined()
    expect(data.username).toBeDefined()
    expect(data.phone).toBeDefined()
    expect(data.website).toBeDefined()
    //Business rules verification
    expect(data.website).toContain('.')
     expect(data.email).toContain('@')
     //console print 
     console.log(data.name)
     console.log(data.email)
     console.log(data.website)
     expect(data.id).toBe(1)
     const headers= response.headers()
     expect(headers['content-type']).toContain('application/json')



})