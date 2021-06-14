let financeTips = ['Balance your checkbook: Balancing a checkbook helps you focus on where you’ve spent your money and it ensures your bank hasn’t made any mistakes. With the help of budgeting tools such as YNAB, it takes just a few minutes.',
'Learn something new: With sites like Coursera and Udemy, continuing your education is as easy and inexpensive as ever. My next class? Introduction to Computational Finance and Financial Econometrics at Coursera.'];

const generateTipsForToday = (arrTips) => {

    let randomNumber = Math.floor(Math.random() * 2);
    return arrTips[randomNumber];
}

const generateCurrentDay = () => {
    
    const nowDate = Date.now();
    const today = new Date(nowDate);
    const todayString = today.toDateString();

    return todayString
}


const generateMenssage = (message, day) => {
    console.log(`The Financial Tip for today ${day} is: \n \n${message} ` );
}

generateMenssage(generateTipsForToday(financeTips), generateCurrentDay());





