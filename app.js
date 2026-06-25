// ======================
// تنظیمات
// ======================

// API removed for GitHub version
const DEMO_MODE = true;

// ======================
// عناصر صفحه
// ======================

const chatContainer =
document.getElementById("chatContainer");

const userInput =
document.getElementById("userInput");

const sendBtn =
document.getElementById("sendBtn");

const moodText =
document.getElementById("moodText");

const moodOrb =
document.getElementById("moodOrb");

const medal =
document.getElementById("medal");

const messageCountElement =
document.getElementById("messageCount");

const typingIndicator =
document.getElementById("typingIndicator");

const clearBtn =
document.getElementById("clearBtn");

const roomTheme =
document.getElementById("roomTheme");

const personality =
document.getElementById("personality");

// ======================
// تعداد پیام‌ها
// ======================

let messageCount =
Number(
localStorage.getItem("messageCount")
) || 0;

messageCountElement.innerText =
messageCount;

// ======================
// مدال‌ها
// ======================

function updateMedal(){

    let currentMedal =
    "🥉 تازه‌کار";

    if(messageCount >= 20)
        currentMedal =
        "🥈 کاوشگر";

    if(messageCount >= 50)
        currentMedal =
        "🥇 برنامه‌نویس";

    if(messageCount >= 100)
        currentMedal =
        "👑 استاد Ana.Fa";

    medal.innerText =
    currentMedal;
}

updateMedal();

// ======================
// حال‌سنج
// ======================

function detectMood(text){

    const t = text.toLowerCase();

    if(
        t.includes("خوشحال") ||
        t.includes("عالی") ||
        t.includes("خوب")
    ){

        moodText.innerText =
        "😊 خوشحال";

        moodOrb.style.background =
        "#22c55e";

        return;
    }

    if(
        t.includes("چرا") ||
        t.includes("چطور") ||
        t.includes("سوال")
    ){

        moodText.innerText =
        "🤔 کنجکاو";

        moodOrb.style.background =
        "#eab308";

        return;
    }

    if(
        t.includes("نفهمیدم") ||
        t.includes("گیج")
    ){

        moodText.innerText =
        "😕 گیج";

        moodOrb.style.background =
        "#60a5fa";

        return;
    }

    if(
        t.includes("ناراحت") ||
        t.includes("غمگین")
    ){

        moodText.innerText =
        "😔 ناراحت";

        moodOrb.style.background =
        "#3b82f6";

        return;
    }

    if(
        t.includes("عصبانی") ||
        t.includes("کلافه")
    ){

        moodText.innerText =
        "😤 عصبانی";

        moodOrb.style.background =
        "#ef4444";

        return;
    }

    if(
        t.includes("پیشرفت") ||
        t.includes("هدف") ||
        t.includes("انگیزه")
    ){

        moodText.innerText =
        "🚀 باانگیزه";

        moodOrb.style.background =
        "#f97316";

        return;
    }

    moodText.innerText =
    "🙂 خنثی";

    moodOrb.style.background =
    "#22c55e";
}

// ======================
// امضا
// ======================

function getSignature(){

    const mode =
    personality.value;

    if(mode === "friendly")
        return
        "🌸 دوستت دارم که کنجکاوی! — Ana.Fa";

    if(mode === "teacher")
        return
        "📚 به یادگیری ادامه بده — Ana.Fa";

    if(mode === "coder")
        return
        "💻 کدنویسی لذت‌بخش باشد — Ana.Fa";

    if(mode === "pro")
        return
        "✨ با آرزوی موفقیت — Ana.Fa";

    if(mode === "fantasy")
        return
        "🪄 جادو در دانایی است — Ana.Fa";

    return
    "😊 روز فوق‌العاده‌ای داشته باشی — Ana.Fa";
}

// ======================
// ساخت پیام
// ======================

function createMessage(
text,
isUser=false
){

    const message =
    document.createElement("div");

    message.className =
    isUser
    ? "message user-message"
    : "message bot-message";

    const avatar =
    document.createElement("div");

    avatar.className =
    "avatar-small";

    avatar.innerText =
    isUser
    ? "🧑"
    : "🤖";

    const bubble =
    document.createElement("div");

    bubble.className =
    "bubble";

    bubble.innerText =
    text;

    message.appendChild(
    avatar
    );

    message.appendChild(
    bubble
    );

    chatContainer.appendChild(
    message
    );

    chatContainer.scrollTop =
    chatContainer.scrollHeight;
}

// ======================
// ذخیره تاریخچه
// ======================

function saveHistory(){

    localStorage.setItem(
        "chatHistory",
        chatContainer.innerHTML
    );
}

function loadHistory(){

    const history =
    localStorage.getItem(
        "chatHistory"
    );

    if(history){

        chatContainer.innerHTML =
        history;
    }
}

loadHistory();

// ======================
// تم اتاق رویایی
// ======================

roomTheme.addEventListener(
"change",
()=>{

    const value =
    roomTheme.value;

    if(value==="space")
        document.body.style.background=
        "linear-gradient(135deg,#020617,#1e3a8a)";

    if(value==="fantasy")
        document.body.style.background=
        "linear-gradient(135deg,#581c87,#9333ea)";

    if(value==="cherry")
        document.body.style.background=
        "linear-gradient(135deg,#ec4899,#f9a8d4)";

    if(value==="coder")
        document.body.style.background=
        "linear-gradient(135deg,#052e16,#16a34a)";

    if(value==="library")
        document.body.style.background=
        "linear-gradient(135deg,#451a03,#92400e)";
}
);

// ======================
// ارسال پیام
// ======================

async function sendMessage(){

    const text =
    userInput.value.trim();

    if(!text)
        return;

    createMessage(
    text,
    true
    );

    detectMood(text);

    userInput.value =
    "";

    messageCount++;

    localStorage.setItem(
        "messageCount",
        messageCount
    );

    messageCountElement.innerText =
    messageCount;

    updateMedal();

    typingIndicator.classList.remove(
    "hidden"
    );

    try{

        await new Promise(resolve => setTimeout(resolve,1000));

        const answer =
        `سلام! 🌸

این نسخه بدون API منتشر شده است.

پیام شما:
"${text}"

برای اتصال به هوش مصنوعی باید بعداً API اضافه شود.

${getSignature()}`;

        createMessage(
        answer,
        false
        );

        saveHistory();

    }catch(error){

        typingIndicator.classList.add(
        "hidden"
        );

        createMessage(
        "❌ خطا در اتصال به سرور",
        false
        );
    }
}

// ======================
// دکمه ارسال
// ======================

sendBtn.addEventListener(
"click",
sendMessage
);

// ======================
// Enter
// ======================

userInput.addEventListener(
"keydown",
(e)=>{

    if(e.key==="Enter")
        sendMessage();
}
);

// ======================
// پاک کردن گفتگو
// ======================

clearBtn.addEventListener(
"click",
()=>{

    localStorage.removeItem(
    "chatHistory"
    );

    localStorage.removeItem(
    "messageCount"
    );

    location.reload();
}
);