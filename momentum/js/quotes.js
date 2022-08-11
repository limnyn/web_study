const quotes=[
    {
        quote: "웃어라 온 세상이 너와 함께 웃을것이다.",
        author: "ralo",
    },
    {
        quote: "죽을때까지 찾아봐라 찾아지나!",
        author: "Greenday",
    },
    {
        quote: "여러분들은 안변해. 원래 인간은 잘 안변해. 참 변하기 힘들어.",
        author: "2400",
    },
    {
        quote: "어떻게라는 이 세글자를 자기 머릿속에서 과감하기 버리는 사람만이 변할 수가 있습니다.",
        author: "3ukson",
    },
    {
        quote: "성공의 반대는 실패가 아니라 도전하지 않는거죠, 왜 도전안하십니까!",
        author: "donjeolrae",
    },
    {
        quote: "나에게 천재일우의 기회가 왔다.",
        author: "Disappointing artificial teeth",
    },
    {
        quote: "일년동안 인터넷끊으세요. 핸드폰 치우세요",
        author: "sad eyes",
    },
    {
        quote: "내가 할수 있는 것과 할수 없는 것을 명확하게 구분하십시오.",
        author: "loldangi",
    },
    {
        quote: "진짜 위기는 뭔지 아십니까? 위기인데도 불구하고 위기인것을 모르는 것이 진짜 위기입니다.",
        author: "kim-chanho",
    },
    {
        quote: "누워만 있으면 뭐가 들어오냐고",
        author: "gimhae taycan-owner",
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;