// - створити блок
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divBlock = document.createElement('div');

divBlock.classList.add(`wrap`, `collapse`, `alpha`, `beta`)

divBlock.style.backgroundColor = 'green';
divBlock.style.color = 'white';
divBlock.style.fontSize = '20px';
divBlock.style.width = '100px';
divBlock.style.height = '30px';
divBlock.style.marginTop = '10px';
divBlock.style.display = 'flex';
divBlock.style.alignItems = 'center';

let p = document.createElement("p")
p.innerText = 'Hello Okten'
divBlock.appendChild(p)

document.body.appendChild(divBlock)

let divBlockCopy = divBlock.cloneNode(true);
document.body.appendChild(divBlockCopy)
divBlockCopy.style.marginTop = '10px';

// - Є масив:['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let lis2 = ['Main', 'Products', 'About us', 'Contacts'];
let ul2 = document.createElement('ul')
document.getElementsByName("ul2")
for (let liEl of lis2) {
    let li2 =document.createElement('li')
    li2.innerText = `${liEl}`;
    ul2.appendChild(li2);
}

document.body.appendChild(ul2);
ul2.style.border = '2px red solid';
ul2.style.display = 'flex';
ul2.style.flexDirection = 'column';

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5
    },
    {
        title: 'Java Complex',
        monthDuration: 6
    },
    {
        title: 'Python Complex',
        monthDuration: 6
    },
    {
        title: 'QA Complex',
        monthDuration: 4
    },
    {
        title: 'FullStack',
        monthDuration: 7
    },
    {
        title: 'Frontend',
        monthDuration: 4
    }
];

let mainDiv3 = document.createElement('div');
document.body.appendChild(mainDiv3);
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divElement3 = document.createElement('div');
    mainDiv3.appendChild(divElement3);
    divElement3.style.border = '2px purple solid';
    divElement3.style.display = 'flex';
    divElement3.style.flexDirection = 'column';
    divElement3.style.margin = '5px';

    let p3 = document.createElement('p');
    divElement3.appendChild(p3);
    p3.innerText = `Title: ${coursesAndDurationArrayElement.title},\nMonthDuration: ${coursesAndDurationArrayElement.monthDuration}`;
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let divMain4 = document.createElement('div');
document.body.appendChild(divMain4);
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divElement4 = document.createElement('div');
    divMain4.appendChild(divElement4);
    divElement4.className = 'item';
    divElement4.style.border = '2px black solid';
    divElement4.style.display = 'flex';
    divElement4.style.flexDirection = 'column';
    divElement4.style.margin = '5px';

    let h1_3 = document.createElement('h1');
    divElement4.appendChild(h1_3);
    h1_3.className = 'heading';
    h1_3.innerText = `Title: ${coursesAndDurationArrayElement.title}`;
    let p_3 = document.createElement('p');
    divElement4.appendChild(p_3);
    p_3.className = 'description';
    p_3.innerText = `MonthDuration: ${coursesAndDurationArrayElement.monthDuration}`
}
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
let simpsonsDiv = document.createElement(`div`);
document.body.appendChild(simpsonsDiv);
for (const simpson of simpsons) {
    let memberDiv = document.createElement('div');
    simpsonsDiv.appendChild(memberDiv);
    memberDiv.className = 'member';
    memberDiv.style.backgroundColor = 'gray';
    memberDiv.style.display = 'flex';
    memberDiv.style.flexDirection = 'column';
    memberDiv.style.margin = '10px';
    memberDiv.style.width='30vw'
    for (const simpsonKey in simpson) {
        if (simpsonKey !== 'photo') {
            let pMember = document.createElement('p');
            memberDiv.appendChild(pMember);
            pMember.innerText = simpsonKey + ': ' + simpson[simpsonKey];
        }
        else if (simpsonKey === 'photo') {
            let pMember = document.createElement('p');
            memberDiv.appendChild(pMember);
            pMember.innerText = simpsonKey + ': ';
            let imgMember = document.createElement('img');
            memberDiv.appendChild(imgMember);
            imgMember.src = simpson.photo;
            imgMember.style.width='15vw'
        }
    }
}

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {

    let mainDiv6 = document.createElement('div');
    document.body.appendChild(mainDiv6);
    mainDiv6.style.width = '600px';
    mainDiv6.style.height = '400px';
    mainDiv6.style.border = '2px solid red';
    mainDiv6.style.display = 'flex';
    mainDiv6.style.flexDirection = 'column';
    mainDiv6.style.alignItems = 'center';
    mainDiv6.style.justifyContent = 'space-around';
    mainDiv6.style.margin = '10px';

    let divTitle = document.createElement('div');
    mainDiv6.appendChild(divTitle);
    divTitle.style.height = '7%';
    divTitle.style.width = '96%';
    divTitle.style.display = 'flex';
    divTitle.style.alignItems = 'center';
    divTitle.style.justifyContent = 'center';
    divTitle.style.border = '1px blue solid';
    divTitle.innerText = course.title;

    let divForDurations = document.createElement('div');
    mainDiv6.appendChild(divForDurations);
    divForDurations.style.height = '7%';
    divForDurations.style.width = '96%';
    divForDurations.style.display = 'flex';
    divForDurations.style.alignItems = 'center';
    divForDurations.style.justifyContent = 'space-between';

    let divMonthsDurations=document.createElement('div')
    divForDurations.appendChild(divMonthsDurations)
    divMonthsDurations.style.height = '100%';
    divMonthsDurations.style.width = '33%';
    divMonthsDurations.style.display = 'flex';
    divMonthsDurations.style.alignItems = 'center';
    divMonthsDurations.style.justifyContent = 'space-between';
    divMonthsDurations.style.border = '1px blue solid';
    divMonthsDurations.innerText = `Months Durations: ${course.monthDuration}`;


    let divHoursDurations=document.createElement('div')
    divForDurations.appendChild(divHoursDurations)
    divHoursDurations.style.height = '100%';
    divHoursDurations.style.width = '65%';
    divHoursDurations.style.display = 'flex';
    divHoursDurations.style.alignItems = 'center';
    divHoursDurations.style.justifyContent = 'space-between';
    divHoursDurations.style.border = '1px blue solid';
    divHoursDurations.innerText = `Hours Durations: ${course.hourDuration}`;


    let divModules=document.createElement('div')
    mainDiv6.appendChild(divModules)
    divModules.style.height = '72%';
    divModules.style.width = '96%';
    divModules.style.display = 'flex';
    divModules.style.flexDirection = 'column';
    divModules.style.alignItems = 'center';
    divModules.style.justifyContent = 'space-around';
    divModules.style.border = '1px blue solid';

    for (const module in course.modules) {
        let divModule = document.createElement('div');
        divModules.appendChild(divModule);
        divModule.style.width = '94%';
        divModule.style.border = '1px blue solid';
        divModule.innerText = course.modules[module];
    }

    // другий спосіб, трохи важчий, але наче теж працює(щод перевірити треба закоментувати усе що в for( of coursesArray) і розкоментувати нижній код)

    // let mainDiv6 = document.createElement('div');
    // document.body.appendChild(mainDiv6);
    // mainDiv6.style.width = '600px';
    // mainDiv6.style.height = '400px';
    // mainDiv6.style.border = '2px solid red';
    // mainDiv6.style.display = 'flex';
    // mainDiv6.style.flexDirection = 'column';
    // mainDiv6.style.alignItems = 'center';
    // mainDiv6.style.justifyContent = 'space-around';
    // mainDiv6.style.margin = '10px';
    //
    // let divTitle = document.createElement('div');
    // mainDiv6.appendChild(divTitle);
    // divTitle.style.height = '7%';
    // divTitle.style.width = '96%';
    // divTitle.style.display = 'flex';
    // divTitle.style.alignItems = 'center';
    // divTitle.style.justifyContent = 'center';
    // divTitle.style.border = '1px blue solid';
    //
    // let divForDurations = document.createElement('div');
    // mainDiv6.appendChild(divForDurations);
    // divForDurations.style.height = '7%';
    // divForDurations.style.width = '96%';
    // divForDurations.style.display = 'flex';
    // divForDurations.style.alignItems = 'center';
    // divForDurations.style.justifyContent = 'space-between';
    //
    // let divMonthsDurations=document.createElement('div')
    // divForDurations.appendChild(divMonthsDurations)
    // divMonthsDurations.style.height = '100%';
    // divMonthsDurations.style.width = '33%';
    // divMonthsDurations.style.display = 'flex';
    // divMonthsDurations.style.alignItems = 'center';
    // divMonthsDurations.style.justifyContent = 'space-between';
    // divMonthsDurations.style.border = '1px blue solid';
    //
    // let divHoursDurations=document.createElement('div')
    // divForDurations.appendChild(divHoursDurations)
    // divHoursDurations.style.height = '100%';
    // divHoursDurations.style.width = '65%';
    // divHoursDurations.style.display = 'flex';
    // divHoursDurations.style.alignItems = 'center';
    // divHoursDurations.style.justifyContent = 'space-between';
    // divHoursDurations.style.border = '1px blue solid';
    //
    // let divModules=document.createElement('div')
    // mainDiv6.appendChild(divModules)
    // divModules.style.height = '72%';
    // divModules.style.width = '96%';
    // divModules.style.display = 'flex';
    // divModules.style.flexDirection = 'column';
    // divModules.style.alignItems = 'center';
    // divModules.style.justifyContent = 'space-around';
    // divModules.style.border = '1px blue solid';
    //
    //
    // for (const courseKey in course) {
    //     if (courseKey === 'title') {
    //         let pTitle=document.createElement('p')
    //         divTitle.appendChild(pTitle)
    //         pTitle.innerText = course.title;
    //     } else if (courseKey === 'monthDuration') {
    //         let pMonthDuration=document.createElement('p')
    //         divMonthsDurations.appendChild(pMonthDuration)
    //         pMonthDuration.innerText = `Months duration: ${course.monthDuration}`;
    //     } else if (courseKey === 'hourDuration') {
    //         let pHourDuration = document.createElement('p');
    //         divHoursDurations.appendChild(pHourDuration);
    //         pHourDuration.innerText = `Months duration: ${course.hourDuration}`;
    //     } else {
    //         for (const module of course.modules) {
    //
    //             let moduleP = document.createElement('div');
    //             divModules.appendChild(moduleP);
    //             // moduleP.style.height = `100%`;
    //             moduleP.style.width = `96%`;
    //             moduleP.style.border = 'solid 1px blue';
    //             moduleP.style.justifyContent = 'space-around';
    //             moduleP.innerText = module;
    //         }
    //     }
    // }
}
