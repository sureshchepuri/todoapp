var TopicModel = require('../models/TopicModel');

function createTopics(app) {
    var topic1 = new TopicModel({title: 'topic1',description: 'desc.....1', questions: [{title: 'question1', commentedBy: 'Suresh', answers: [{title: 'answer1', commentedBy: 'Suresh', rating: 2},{title: 'answer2', commentedBy: 'Prakash', rating: 4}]}]});
    var topic2 = new TopicModel({title: 'topic2',description: 'desc.....2', questions: [{title: 'question2-1', commentedBy: 'Naresh', answers: [{title: 'answer2-1', commentedBy: 'Naresh', rating: 1},{title: 'answer2-2', commentedBy: 'Fernando', rating: 2}]}]});
    var topic3 = new TopicModel({title: 'topic3',description: 'desc.....2', questions: [{title: 'question3-1', commentedBy: 'Naresh', answers: [{title: 'answer3-1', commentedBy: 'Kwin', rating: 4},{title: 'answer3-2', commentedBy: 'James', rating: 5}]}]});
    createTopic(topic1);
    createTopic(topic2);
    createTopic(topic3);
}

//add default topics
function createTopic(newTopic) {
    TopicModel.findOne({title: newTopic.title}, function(error, topic) {
        if(!topic) {
            TopicModel.create(newTopic, function (error, user) {
                if (error) {
                    console.log('Error occurred while saving topic : ' + error);
                }
                console.log('Topic created successfully');
            });
        } else {
            console.log('Topic already exists, so ignoring the creation....');
        }
    });
}

//add default users and roles
var createDefaultTopics = function(app) {
    createTopics(app);
};

module.exports.runBootstrapScript = createDefaultTopics;