import "dotenv/config"
import express from "express"
import cors from "cors"
import OpenAI from "openai";

const openai = new OpenAI(
  {
    apiKey: "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",
  }
);
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('api calisiyor!')
})

app.post('/create-fake-comments', async (req, res) => {
  const { systemMessage,appName,appAge,appRelationship,appCareer,appGender } = req.body;
  const userContent = `${appName}-${appRelationship}-${appAge}-${appCareer}-${appGender}`
  try { 
    
    async function main() {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: userContent },
        ],
        model: "gpt-3.5-turbo",
      });
      // console.log(completion.choices[0].message.content);
      console.log(completion.choices[0])
      res.json(completion.choices[0].message.content);
    }
    main();

  } catch (error) {
    console.error('OpenAI API hatası:', error);
    res.status(500).json({ error: 'API çağrısı başarısız oldu.' });
  }
});

app.listen(5000, () => console.log('5000 portundan dinleniyor!'))
