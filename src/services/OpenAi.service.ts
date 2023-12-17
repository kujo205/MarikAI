
import {OpenAI} from 'openai'
class OpenAiService{
    private client: OpenAI;
    constructor() {
        this.client = new OpenAI({
            apiKey:process.env.OPENAI_API_KEY
        })
    }




}
