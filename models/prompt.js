import { model,models,Schema } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User', // So that user will be able to create as many prompts as he wants
    },
    prompt:{
        type: String, 
        required: [true, 'Prompt is required.']
    },
    tag: {
        type: String,
        required: [true, 'tag is required. ']
    },
})

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt; 