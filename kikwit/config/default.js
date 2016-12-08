import consolidate from 'consolidate';

export default {
            
    cluster: false,
    route: {
        overview: true  
    },
    server: {
        port: 3000
    },
    views: {
        cache: false,
        defaultEngine: 'dust',
        engines: {
            dust: consolidate['dust']
        }
    }
}

