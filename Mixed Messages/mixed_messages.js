let financeTips = ['Balance your checkbook: Balancing a checkbook helps you focus on where you’ve spent your money and it ensures your bank hasn’t made any mistakes. With the help of budgeting tools such as YNAB, it takes just a few minutes.',
'Learn something new: With sites like Coursera and Udemy, continuing your education is as easy and inexpensive as ever. My next class? Introduction to Computational Finance and Financial Econometrics at Coursera.',
];

const generateTipsForToday = (arrTips) => {

    let randomNumber = Math.floor(Math.random() * 2);
    return arrTips[randomNumber];
}

const changeDay = (arr) => {
    if (arr[0] === 'Sun'){
        arr[0] = 'Sunday';
    } else if (arr[0] === 'Mon'){
        arr[0] = 'Monday';
    } else if (arr[0] === 'Tue'){
        arr[0] = 'Tuesday';
    } else if (arr[0] === 'Wed'){
        arr[0] = 'Wednesday';
    } else if (arr[0] === 'Thu'){
        arr[0] = 'Thursday';
    } else if (arr[0] === 'Fri'){
        arr[0] = 'Friday';
    } else if (arr[0] === 'Sat'){
        arr[0] = 'Suturday';
    }
}

const changeMonth = (arr) => {
    if (arr[1] === 'Jan'){
        arr[1] = 'January';
    } else if (arr[1] === 'Feb'){
        arr[1] = 'February';
    } else if (arr[1] === 'Mar'){
        arr[1] = 'March';
    } else if (arr[1] === 'Apr'){
        arr[1] = 'April';
    } else if (arr[1] === 'Jun'){
        arr[1] = 'June';
    } else if (arr[1] === 'Jul'){
        arr[1] = 'July';
    } else if (arr[1] === 'Aug'){
        arr[1] = 'August';
    } else if (arr[1] === 'Sep'){
        arr[1] = 'September';
    } else if (arr[1] === 'Oct'){
        arr[1] = 'October';
    } else if (arr[1] === 'Nov'){
        arr[1] = 'November';
    } else if (arr[1] === 'Dic'){
        arr[1] = 'December';
    }
}

const generateCurrentDay = () => {
    
    const nowDate = Date.now();
    const today = new Date(nowDate);
    const todayString = today.toDateString();

    const todayArray = todayString.split(' ');
    console.log(todayArray);

    changeDay(todayArray);
    changeMonth(todayArray);
    
    return {
        day: todayArray[0],
        month: todayArray[1],
        date: todayArray[2],
        year: todayArray[3]
    }
}

let date = generateCurrentDay();

const generateMenssage = (message, date) => {
    console.log(`Hello, Your financial tip for ${date.day} ${date.date} ${date.month} is: \n \n${message} ` );
}


generateMenssage(generateTipsForToday(financeTips), generateCurrentDay());





