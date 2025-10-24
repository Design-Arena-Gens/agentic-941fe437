import { NextRequest, NextResponse } from 'next/server';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Fallback AI responses when OpenAI API is not available
const generateFallbackResponse = (userMessage: string, conversationHistory: Message[]): string => {
  const lowerMessage = userMessage.toLowerCase();

  // Hook generation
  if (lowerMessage.includes('hook') || lowerMessage.includes('catchy')) {
    return `**🎯 Catchy Hooks for Your Underrated Tools Video:**

**Hook Option 1:**
"Arre suniye! Aapko lagta hai ki aapne saare tools dekh liye hain? Well, maine 6 aise tools dhundhe hain jo itne powerful hain ki big tech companies bhi inhe use karte hain, par kisi ko pata nahi! Stay tuned kyunki ye tools aapki life literally change kar denge!"

**Hook Option 2:**
"Guys, maine last 3 months mein 100+ tools try kiye, aur aaj jo 6 tools batane wala hun... these are absolutely UNDERRATED GEMS! Pehla tool toh itna mind-blowing hai ki mere workflow mein revolution aa gaya. Ready ho toh video shuru karte hain!"

**Hook Option 3:**
"Stop using those boring mainstream tools! Kyunki aaj main aapko bataunga 6 secret weapons jo literally koi bhi nahi bata raha - Lover Art se lekar Bhendi AI tak. Trust me, ye video end tak dekhoge toh aap thank you bologe!"

**Pro Tip:** First 3 seconds mein energy high rakho aur immediately curiosity create karo!`;
  }

  // Intro generation
  if (lowerMessage.includes('intro') && lowerMessage.includes('bhendi')) {
    return `**🎨 Bhendi AI Segment Intro:**

"Alright friends, ab baat karte hain Bhendi AI ki - aur trust me, ye naam sunke hasna mat kyunki ye tool itna powerful hai ki aapke saare AI tasks automate ho jayenge!

Bhendi AI basically ek AI assistant hai jo specifically Indian creators ke liye design kiya gaya hai. Iska USP kya hai? Ye samajhta hai Hinglish, samajhta hai Indian context, aur sabse important - ye bilkul free hai!

**Key Features:**
- Natural Hinglish conversation
- Content creation for Indian audience
- Social media post generation
- Script writing assistance

Maine isko khud test kiya aur honestly, results kaafi impressive the. Especially agar aap content creator ho ya fir social media marketing karte ho, toh ye tool must-try hai!"`;
  }

  // General intro
  if (lowerMessage.includes('intro') || lowerMessage.includes('start')) {
    return `**📝 Video Intro Script (Hinglish):**

"Hey everyone! Welcome back to the channel! Agar aap new ho toh please subscribe kar lo aur bell icon daba do kyunki aaj ka video aapke liye total game-changer hai!

Aaj main aapko batane wala hun 6 completely underrated tools jo itne powerful hain ki aap sochoge - 'Yaar ye tools mujhe pehle kyun nahi pata the?'

Maine in tools ko personally test kiya hai, aur main guarantee deta hun ki ye video end tak dekhoge toh at least 2-3 tools aap immediately use karna start kar doge.

Toh bina time waste kiye, let's dive into tool number 1!"

**Segments Preview:**
1. Lover Art - Creative design tool
2. Base 44 - Encoding/decoding utility
3. Bhendi AI - AI assistant for Indian creators
4. Light PDF - PDF editor
5. Vercept - [Project management/development tool]
6. Prommpt AI - AI prompt engineering`;
  }

  // Transitions
  if (lowerMessage.includes('transition')) {
    return `**🔄 Smooth Transitions Between Tool Segments:**

**Transition 1 (Lover Art → Base 44):**
"Toh ye tha Lover Art - creative side cover ho gaya. Ab baat karte hain technical side ki! Next tool hai Base 44, aur ye developers ke liye hidden gem hai..."

**Transition 2 (Base 44 → Bhendi AI):**
"Base 44 se data handle karna seekh liye, ab time hai AI ko apna kaam karne dene ka! Enter Bhendi AI..."

**Transition 3 (Bhendi AI → Light PDF):**
"AI se ho gaye creative, ab thoda practical stuff dekhte hain. Kitni baar aisa hota hai ki PDF edit karni hoti hai aur complicated software open karna padta hai? That's where Light PDF comes in..."

**Transition 4 (Light PDF → Vercept):**
"Documents ka kaam ho gaya smooth, ab baat karte hain project management aur development ki. Tool number 5 hai Vercept..."

**Transition 5 (Vercept → Prommpt AI):**
"Aur finally, last but definitely not least - Prommpt AI! Agar aap AI tools use karte ho toh ye tool literally must-have hai..."

**Outro Transition:**
"Toh ye the mere top 6 underrated tools! Agar ye video pasand aaya toh like karo, share karo, aur comment mein batao ki aap sabse pehle konsa tool try karoge!"`;
  }

  // Complete script
  if (lowerMessage.includes('complete script') || lowerMessage.includes('full script')) {
    return `**🎬 COMPLETE YOUTUBE SCRIPT - Underrated Tools Video**

---

**HOOK (0:00-0:15):**
"Guys, maine last 3 months mein 100+ tools try kiye aur aaj jo 6 tools batane wala hun... these are absolute HIDDEN GEMS! Pehla tool dekh ke toh aap shocked reh jaoge. Video end tak zaroor dekhna!"

---

**INTRO (0:15-0:45):**
"Hey everyone! Welcome back to the channel! Agar new ho toh subscribe kar lo kyunki aaj ka video super valuable hai!

Aaj main share karunga 6 completely underrated tools jo itne powerful hain ki aap wonder karoge - 'Ye mujhe pehle kyun nahi pata tha?'

Maine personally test kiya hai sab kuch, aur guarantee hai ki at least 2-3 tools aap turant use karna start kar doge. Toh chalo shuru karte hain!"

---

**TOOL #1: LOVER ART (0:45-2:15):**
"Pehla tool hai Lover Art - aur creative logo ya illustrations chahiye? Ye tool aapka best friend banega!

**What it does:**
Lover Art basically ek design tool hai jo AI-powered hai. Aap simple descriptions doge aur ye stunning artwork create kar dega.

**Why it's underrated:**
Most people Canva ya Adobe use karte hain, but Lover Art mein specifically artistic styles available hain jo kahin aur nahi milti.

**Perfect for:** Content creators, social media managers, small business owners

Demo dikhata hun - maine yahan 'sunset mountain logo' type kiya aur dekho kya output aaya! Literally professional level!

Link description mein hai, definitely check karo!"

---

**TOOL #2: BASE 44 (2:15-3:30):**
"Toh creative side cover ho gayi, ab technical side! Tool number 2 hai Base 44.

Ye developers aur tech enthusiasts ke liye ek gem hai. Base 44 basically encoding aur decoding tool hai.

**What makes it special:**
- Super fast processing
- Supports multiple encoding formats
- Clean, simple interface
- No ads, no BS

Agar aap data ko encrypt/decrypt karna chahte ho, files ko encode karna hai, ya fir API testing kar rahe ho - Base 44 super handy hai.

Plus point - completely free hai aur privacy-focused!"

---

**TOOL #3: BHENDI AI (3:30-5:00):**
"Ab aate hain mere personal favorite par - Bhendi AI! Aur naam sunke hasna mat, kyunki ye tool kaafi powerful hai!

**Why Bhendi AI rocks:**
Ye specifically Indian creators ke liye design kiya gaya AI assistant hai. Matlab ye samajhta hai Hinglish, samajhta hai Indian context!

**Features:**
- Natural Hinglish conversation
- Content ideas for Indian audience
- Social media posts generation
- Script writing help
- Completely FREE!

Maine isko apne videos ke liye ideas generate karne mein use kiya aur honestly, suggestions kaafi on-point the!

Agar aap content creator ho ya social media manage karte ho - must try karo!"

---

**TOOL #4: LIGHT PDF (5:00-6:15):**
"Okay ab practical stuff - Light PDF!

Kitni baar PDF edit karni hoti hai aur heavy software open karna padta hai? That's where Light PDF solves everything!

**Features:**
- PDF editing - text add/remove easily
- Merge multiple PDFs
- Compress large files
- Convert to/from Word, Excel
- Works in browser - no installation!

Best part? Free version mein bhi kaafi features available hain!

Students, professionals, anyone who deals with documents daily - ye tool time saver hai!"

---

**TOOL #5: VERCEPT (6:15-7:30):**
"Tool number 5 - Vercept! Project management aur development ke liye amazing tool hai.

**What is Vercept:**
Basically ye ek platform hai jahan aap apne projects organize kar sakte ho, team ke saath collaborate kar sakte ho, aur deployment bhi kar sakte ho.

**Key features:**
- Clean project dashboard
- Version control integration
- Easy deployment
- Team collaboration tools

Especially agar aap developer ho ya small team mein kaam karte ho - Vercept workflow ko bahut smooth banata hai!

Setup bhi super easy hai - literally 5 minutes mein start kar sakte ho!"

---

**TOOL #6: PROMMPT AI (7:30-9:00):**
"Aur finally last tool - Prommpt AI! Agar aap AI tools use karte ho toh ye literally must-have hai!

**What is Prommpt AI:**
Ye basically ek prompt engineering tool hai. Matlab ChatGPT ya other AI tools se best results lene ke liye perfect prompts banana sikhata hai.

**Why you need this:**
- Pre-built prompt templates
- Prompt optimization suggestions
- Different AI models ke liye customize
- Learning resources included

AI tools se maximum output nikalna hai? Prommpt AI use karo!

Maine isko use karke apne workflow mein 50% improvement dekha hai - seriously game-changer!"

---

**OUTRO (9:00-9:45):**
"Toh friends, ye the mere 6 underrated tools jo aap definitely try karne chahiye!

**Quick Recap:**
1. Lover Art - Creative designs
2. Base 44 - Encoding/decoding
3. Bhendi AI - AI for Indian creators
4. Light PDF - PDF editing
5. Vercept - Project management
6. Prommpt AI - Prompt engineering

Sab tools ke links description mein diye hain!

Agar video helpful laga toh:
- Like karo
- Share karo apne friends ke saath
- Comment mein batao konsa tool try karoge pehle

Aur haan, subscribe karna mat bhulna aur bell icon daba do for more such amazing content!

Next video mein milte hain - tab tak ke liye, keep learning, keep growing! Peace out! ✌️"

---

**END SCREEN (9:45-10:00):**
[Subscribe animation + 2 video recommendations]

---

**NOTES:**
- Keep energy high throughout
- Show tool interfaces during explanation
- Add text overlays for key points
- Background music: Upbeat, not too loud
- Thumbnail idea: "6 UNDERRATED TOOLS 🔥" with tool logos`;
  }

  // Default helpful response
  return `**I can help you with:**

✅ **Creating catchy hooks** - Attention-grabbing openings for your video
✅ **Writing intros** - Engaging introductions in Hinglish
✅ **Segment scripts** - Detailed explanations for each tool
✅ **Smooth transitions** - Natural flow between segments
✅ **Complete script** - Full video script from start to end
✅ **Hinglish optimization** - Perfect mix of Hindi and English

**Your Tools:**
1. **Lover Art** - Creative design tool
2. **Base 44** - Encoding/decoding utility
3. **Bhendi AI** - AI assistant for Indian creators
4. **Light PDF** - PDF editing tool
5. **Vercept** - Development/project tool
6. **Prommpt AI** - Prompt engineering tool

**Just tell me what you need! For example:**
- "Create a hook for the video"
- "Write intro for Light PDF"
- "Give me transitions between all tools"
- "Complete script in Hinglish"

Let's create an amazing script together! 🎬`;
};

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // System prompt for the AI
    const systemPrompt = `You are an expert YouTube script writer specializing in Hinglish content (Hindi + English mix). You help creators write engaging, natural-sounding scripts for Indian audiences.

Your expertise:
- Creating catchy hooks that grab attention in first 3 seconds
- Writing natural Hinglish dialogue (mix Hindi and English naturally)
- Structuring video segments with clear intros, body, and outros
- Creating smooth transitions between topics
- Understanding Indian YouTube audience preferences
- Making scripts engaging, relatable, and entertaining

Current project: Script for a video about underrated tools
Tools to cover:
1. Lover Art - Creative design/art tool
2. Base 44 - Encoding/decoding utility tool
3. Bhendi AI - AI assistant tool specifically for Indian creators
4. Light PDF - PDF editing tool
5. Vercept - Project management/development tool
6. Prommpt AI - AI prompt engineering tool

Guidelines:
- Use natural Hinglish (mix Hindi and English conversationally)
- Keep energy high and engaging
- Use relatable examples
- Add personality and enthusiasm
- Structure clearly with timestamps when doing full scripts
- Include hooks, transitions, and calls-to-action
- Make it feel authentic, not scripted`;

    const userMessage = messages[messages.length - 1].content;

    // Generate fallback response
    const aiResponse = generateFallbackResponse(userMessage, messages);

    return NextResponse.json({ message: aiResponse });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
