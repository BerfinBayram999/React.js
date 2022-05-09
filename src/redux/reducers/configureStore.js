import { legacy_createStore as createStore} from 'redux'
import reducers from "../reducers/index";


export default function configureStore(){


    return createStore(reducers)
}

//exxport ile aldığımız kombine edilmiş reducarları storea bildiriyoruz .Store ve reducar arasındaki bağlantı

