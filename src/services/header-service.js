import API from './Api';
import CookieMixin from '../mixins/cookies-mixin';
import { stores } from '@sapper/app';

var admin_email, admin_password;

const subscribeSession = () => {
    const { session } = stores();

    session.subscribe(value => {
        admin_email = value.ADMIN_EMAIL;
        admin_password = value.ADMIN_PASSWORD;
    });
}

const tokenDelivery = () => {
    
    
    return API.post('auth/token-delivery', {
            email: admin_email,
            password: admin_password
    });
}
const tokenDeliveryForDashboard = async (email, password) =>{
    let token = await getTokenAnonymous();
    return API.post('auth/account/token-delivery', {
            email: email, 
            password: password
        }, 
        token
    )
}
const tokenVerify = (token) => {
    return API.post('/token-verify', {token: token});
}
const getTokenAnonymous = async () => {
    subscribeSession();
    let cookie = CookieMixin.readCookie("token_anonymous");
    
    if(cookie){
        return await tokenVerify(cookie).then(async response =>{
            if(response.status == 200){
                return cookie;
            }else{
                return await tokenDelivery().then( data => {
                    CookieMixin.setCookie = ("token_anonymous", data.token);
                    return data.token;
                 })
            } 
        })
    }else{
        return await tokenDelivery().then( data => {
           document.cookie = "token_anonymous="+data.token;
           return data.token;
        })
    }
}
const getTokenDashboard = () => {
    return CookieMixin.readCookie("token_dashboard")
}

const HeaderService = {
    tokenDelivery,
    tokenDeliveryForDashboard,
    getTokenAnonymous,
    getTokenDashboard,
    tokenVerify
}

export default HeaderService;
