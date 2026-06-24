import {test,expect} from '@playwright/test'
import { uploadfile } from '../../pages/uploadpage'
test('upload' , async({page})=>{
    const UPLOAD=new uploadfile(page)
    await UPLOAD.Upload()
     await expect(page.getByRole('heading' , {name:'File Uploaded!'})).toBeVisible()
});