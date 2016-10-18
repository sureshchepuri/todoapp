var TaskModel = require('../../models/TaskModel');
var Result = require('../../models/Result')
var ErrorResult = require('../../models/ErrorResult')

var dashboard = {
    listTasks : function(req, res) {
        console.log('================ listTasks =========== ');
        TaskModel.find({}, function(err, tasks) {
            if (!err){
                res.status(200);
                res.json(new Result('OK', tasks, {}, "Success"));
            } else {
                res.status(400);
                return res.json(new ErrorResult('FAILED', "Internal error occured", errors));
            }
        });
    },
    getTask : function(req, res) {
        console.log('================ getTask =========== ',req.params);
        TaskModel.findOne({_id: req.params.id}, function(err, task) {
            if (!err){
                res.status(200);
                res.json(new Result('OK', task, {}, "Success"));
            } else {
                res.status(400);
                return res.json(new ErrorResult('FAILED', "Internal error occured", errors));
            }
        });
    }
};
module.exports = dashboard;