var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var TopicSchema = new mongoose.Schema({
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
    { collection : 'topics' }
);
TopicSchema.plugin(mongoosePaginate);
var TopicModel = mongoose.model('Topic', TopicSchema);

module.exports = TopicModel;