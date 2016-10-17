var TaskModel = require('../models/TaskModel');

function createTasks(app) {
    var task1 = new TaskModel({title: 'task1',description: 'desc.....1', questions: [{title: 'question1', answers: [{title: 'answer1'},{title: 'answer2'}]}]});
    var task2 = new TaskModel({title: 'task2',description: 'desc.....2', questions: [{title: 'question2-1', answers: [{title: 'answer2-1'},{title: 'answer2-2'}]}]});
    var task3 = new TaskModel({title: 'task3',description: 'desc.....2', questions: [{title: 'question3-1', answers: [{title: 'answer3-1'},{title: 'answer3-2'}]}]});
    createTask(task1);
    createTask(task2);
    createTask(task3);
}

//add default tasks
function createTask(newTask) {
    TaskModel.findOne({title: newTask.title}, function(error, task) {
        if(!task) {
            TaskModel.create(newTask, function (error, user) {
                if (error) {
                    console.log('Error occurred while saving task : ' + error);
                }
                console.log('Task created successfully');
            });
        } else {
            console.log('Task already exists, so ignoring the creation....');
        }
    });
}

//add default users and roles
var createDefaultTasks = function(app) {
    createTasks(app);
};

module.exports.createDefaultTasks = createDefaultTasks;