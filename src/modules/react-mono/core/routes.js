import DataResolver from '@services/DataResolver';
import requireLogin from '@root/middlewares/requireLogin';

export default [
    {
        'path': '/api/users',
        'method': 'GET',
        'middleware': '',
        'callback': (req, res, next) => {
            let dataResolver = new DataResolver(req);
            res.send(dataResolver.get('users').data);
        }
    },
    {
        'path': '/api/inner-users',
        'method': 'GET',
        'middleware': '',
        'callback': (req, res, next) => {
            let dataResolver = new DataResolver(req);
            res.send(dataResolver.get('inner-users').data);
        }
    },
    {
        'path': '/api/admins',
        'method': 'GET',
        'middleware': requireLogin,
        'callback': (req, res, next) => {
            let dataResolver = new DataResolver(req);
            res.send(dataResolver.get('admins').data);
        }
    },
    {
        'path': '/api/current_user',
        'method': 'GET',
        'middleware': '',
        'callback': (req, res, next) => {
            let dataResolver = new DataResolver(req);
            req.send(dataResolver.get('current_user').data);
        }
    }
];
