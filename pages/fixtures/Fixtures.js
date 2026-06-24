import{test as base} from '@playwright/test'
import{Login} from '../../pages/saucedemopages/Loginpage'
export const test=base.extend({
    loggedInpage: async({page}, use)=>{
        const login=new Login(page);
        await login.webopen()
        await login.Logindata('standard_user',
      'secret_sauce');
      await use(page);
    }
});
export{expect} from '@playwright/test'