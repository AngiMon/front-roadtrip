import API from './Api';
import CookieMixin from '../mixins/cookies-mixin';
import { stores } from '@sapper/app';

var admin_email, admin_password;

const tokenDelivery = () => {
    const { session } = stores();

    session.subscribe(value => {
        admin_email = value.ADMIN_EMAIL;
        admin_password = value.ADMIN_PASSWORD;
    });
    
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
const getTokenAnonymous = async () => {
    let cookie = CookieMixin.readCookie("token_anonymous");

    if(cookie){
        return cookie
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
    getTokenDashboard
}

export default HeaderService;
