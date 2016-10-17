module.exports = function(){
    console.log("NODE_ENV: "+ process.env.NODE_ENV);
    switch(process.env.NODE_ENV){
        case 'dev':
            return {
                db:{
                    url: "mongodb://localhost:27017/todoApp"
                }
            };
        case 'ci':
            return {
                db:{
                    url: "mongodb://54.173.49.80:27017/todoApp-ci"
                }
            };
        case 'test':
            return {
                db:{
                    url: "mongodb://localhost:27017/todoApp-test"
                }
            };
        case 'prod':
            return {};
        default:
            return {};
    }
};