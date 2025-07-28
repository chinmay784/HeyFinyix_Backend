const mongoose = require('mongoose');

const NEED_ENUM = [
    "Comfort",
    "Importance",
    "Change",
    "Love",
    "Growth",
    "Serving",
    "Stillness",
];
const SEASON_ENUM = ["Rest", "Growth", "Chaos", "Transition", "Not Sure"];

const employeeSchema = new mongoose.Schema({
    EmpyName: {
        type: String,
        required: true,
        trim: true,
    },
    role:{
        type:String,
        enum:["employee", "admin"]
    },
    comfort: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "Feeling safe, stable, and emotionally grounded.",
        },
    },
    importance: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "Feeling seen, valued, and respected for who you are.",
        },
    },
    change: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "Experiencing newness, excitement, or creative stimulation.",
        },
    },
    loveConnection: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "Feeling bonded, accepted, or emotionally close to others.",
        },
    },
    growth: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "Learning, evolving, or becoming a better version of yourself.",
        },
    },
    serving: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "Contributing to someone beyond yourself. Giving back.",
        },
    },
    stillness: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "Feeling okay doing nothing. Being at peace with simply being.",
        },
    },
    topNeeds: {
        type: [String],
        enum: NEED_ENUM,
        required: false,
        validate: {
            validator: function (value) {
                return value.length === 4;
            },
            message: "You must select exactly 4 top needs.",
        },
    },
    // feel today by Emojois
    FellEmojois: {
        type: String,
        required: false,
        enum: ["🙂Great", "😐Okay", "😔Tired", "😩 Overwhelmed ", "🤯 Numb", "💭 Reflective"]
    },
    EmotionShow: {
        type: String,
        required: false,
        enum: ["Frustration", "loneliness", "joy", "peace ", " confusion…"]
    },
    mentalClarity: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "How clear and focused does your mind feel?",
        },
    },

    emotionalBalance: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "How emotionally regulated or grounded are you?",
        },
    },

    physicalVitality: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "How energized and physically healthy do you feel?",
        },
    },

    spiritualConnection: {
        value: { type: Number, min: 1, max: 10, required: false },
        description: {
            type: String,
            default: "Do you feel connected to something bigger than yourself?",
        },
    },
    avoiding: {
        type: String,
        required: false,
        description: "Is there something you're avoiding that you wish you weren’t?",
    },

    needButHesitate: {
        type: String,
        required: false,
        description: "What do you need more of right now, but hesitate to ask for?",
    },

    innerVoice: {
        type: String,
        required:false,
        description: "If your inner self could speak without fear, what would it say?",
    },

    giveToOthersButNotSelf: {
        type: String,
        required: false,
        description: "What do you often give others that you rarely give yourself?",
    },
    season: {
        type: String,
        enum: SEASON_ENUM,
        required:false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model('Employee', employeeSchema);
