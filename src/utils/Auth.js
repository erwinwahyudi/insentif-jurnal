import Storage from './Storage';

export default class Auth {
    static session() {
        if(Storage.getData('session')) {
            return true;
        } else {
            return false;
        }
    }

    static role() {
        if(Storage.getData('session')) {
            if(Storage.getData('session').r == 1) {
				return 'rektor';
			} else if (Storage.getData('session').r == 2) {
                return 'validator';
            } else if (Storage.getData('session').r == 3) {
                return 'keuangan';
            } else if (Storage.getData('session').r == 4) {
                return 'dosen';
            } else {
                return 'anonim';
            }
		} else {
			return '';
		}
    }

    static username() {
        if(Storage.getData('session')) {
			return Storage.getData('session').username;
		} else {
			return '';
		}               
    }

    static token() {
        if(Storage.getData('session')) {
            return Storage.getData('session').t;
        } else {
            return 'invalid token';
        }
    }
}