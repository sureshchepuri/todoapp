var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var TaskSchema = new mongoose.Schema({
        title: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true
        },
        description: {
            type: String,
            trim:true
        },
        status: {
            type: String,
            trim:true
        },
        startDate: {
            type: Date,
            default: Date.now
        },
        questions: [{
            title: {
                type: String,
                trim: true,
                lowercase: true,
                unique: true
            },
            answers: [{
                title: {
                    type: String,
                    trim: true,
                    lowercase: true,
                    unique: true
                }
            }]
        }]
    },
    { collection : 'tasks' }
);
TaskSchema.plugin(mongoosePaginate);
var TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;