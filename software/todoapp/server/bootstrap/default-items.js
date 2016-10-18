var TopicModel = require('../models/TopicModel');

function createTopics(app) {
    var topic1 = new TopicModel({title: 'topic1',description: 'desc.....1', questions: [{title: 'question1', answers: [{title: 'answer1'},{title: 'answer2'}]}]});
    var topic2 = new TopicModel({title: 'topic2',description: 'desc.....2', questions: [{title: 'question2-1', answers: [{title: 'answer2-1'},{title: 'answer2-2'}]}]});
    var topic3 = new TopicModel({title: 'topic3',description: 'desc.....2', questions: [{title: 'question3-1', answers: [{title: 'answer3-1'},{title: 'answer3-2'}]}]});
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