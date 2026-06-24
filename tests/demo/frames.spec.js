import{test,expect} from '@playwright/test'
import { Frames } from '../../pages/frames';
test('Frames' ,async({page})=>{
const frame=new Frames(page);
await frame.wenbopen();
await expect(frame.GetFrametext()).toBeVisible()
  




});