
//Result model for API
var Result = function( status, data, pagination, message ) {
    this.status = status;
    this.data = data;
    if(pagination) {
        this.pagination = {};
        this.pagination.total = pagination.total;
        this.pagination.page = pagination.page;
        this.pagination.pages = pagination.pages;
        this.pagination.limit = pagination.limit;
    }
    this.messages = message;
};

module.exports = Result;
