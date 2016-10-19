var TopicModel = require('../../models/TopicModel');
var Result = require('../../models/Result')
var ErrorResult = require('../../models/ErrorResult')

var dashboard = {
    listTopics : function(req, res) {
        console.log('================ listTopics =========== ');
        TopicModel.find({}, function(err, topics) {
            if (!err){
                res.status(200);
                res.json(new Result('OK', topics, {}, "Success"));
            } else {
                res.status(400);
                return res.json(new ErrorResult('FAILED', "Internal error occured", errors));
            }
        });
    },
    getTopic : function(req, res) {
        console.log('================ getTopic =========== ',req.params);
        TopicModel.findOne({_id: req.params.id}, function(err, topic) {
            if (!err){
                res.status(200);
                res.json(new Result('OK', topic, {}, "Success"));
            } else {
                res.status(400);
                return res.json(new ErrorResult('FAILED', "Internal error occured", errors));
            }
        });
    },
    updateTopic : function(req, resp) {
        console.log('---------- add answer ----------')
        console.log(req.body);
        TopicModel.update({'_id': req.body._id},req.body, {}, function() {
            console.log('updated')
            resp.status(200);
            resp.json(new Result('OK', {}, {}, "Success"));
        });

    }
};
module.exports = dashboard;