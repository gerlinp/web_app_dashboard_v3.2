const alertBanner = document.querySelector('#alert');
const notification = document.querySelector('#notification');
const closeButton = [alertBanner, notification];
const trafficCanvas = document.querySelector('#traffic-chart');
const dailyCanvas = document.querySelector('#daily-chart');
const mobileCanvas = document.querySelector('#mobile-chart');
const traffic = document.querySelector('#traffic');
const bell = document.querySelector(".badge");
const bellItems = document.querySelectorAll('.bell-item');
const membersHtml = document.querySelector('#members-container');
const activityHtml = document.querySelector('#activity-container');
const trafficNav = document.querySelector('.traffic-nav');
let updateChart = document.trafficNav.view3;
let prev = null;
let newMembers = '';
let activity = '';
let trafficChart = '';
let li = '';
function close(btn) {
    if (btn.classList.contains("clsBtn")) {
        btn.parent.style.display = "none";
    }
} 

//-------------- Alert-Banner & Notification---------------//


alertBanner.innerHTML = `
    <div class="alert-banner">
    <p><strong>Alert:</strong> You have overdue tasks to complete </p>
    <p class="clsBtn">X</p> 
    </div>
`;

notification.addEventListener('click', e =>{
    if ( bell.classList.contains('active')) {
        alertBanner.innerHTML += `    
        <div class="alert-banner">
        <p>Jasen Murphy commented on MyApp's SEO Tips </p>
        <p class="clsBtn">X</p> 
        </div>
        <div class="alert-banner">
        <p>Dale Byrd liked the post on Facebook's Changes for 2021 </p>
        <p class="clsBtn">X</p> 
        </div>
        <div class="alert-banner">
        <p>Dawn Wood commented on Facebook's Changes for 2021 </p>
        <p class="clsBtn">X</p> 
        </div>`
    }
    bell.classList.remove('active')
});

// remove notification event Listener
closeButton.forEach(item => {
    item.addEventListener('click', e => {
        if(e.target.className === 'clsBtn'){   
            let parentEl = e.target.parentElement; 
            parentEl.style.display = "none"; 
            }
    });
});


//-------------- Traffic Chart---------------//
    
    let Monthly = {
        labels: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            data: [1403, 1975, 1515, 2000, 1988, 2207, 1800, 2339, 2250, 2416, 1520, 1302], 
            fill:true,
            backgroundColor: 'rgba(187, 134, 252,.60)',
            borderWidth: 1,
            }]
    }

    let Weekly = {
        labels: ["16-22", "23-29", "30-5", "6-12" , "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets:[{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            fill:true,
            backgroundColor: 'rgba(187, 134, 252,.60)',
            borderWidth: 1,
            }]
    }

    let Daily = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets:[{
            data: [750, 1000, 1500, 1750,  1850, 1500, 2500],
            fill:true,
            backgroundColor: 'rgba(187, 134, 252,.60)',
            borderWidth: 1,
            }]
    }

    let Hourly = {
        labels: ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
        datasets:[{
            data: [2331, 2623, 2728, 2432, 2345, 2676, 2381, 2990, 1629],
            fill:true,
            backgroundColor: 'rgba(187, 134, 252,.60)',
            borderWidth: 1,
            }]
    }


let trafficOptions = {
    aspectRation: 2.5,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    plugins: {
        legend : {
            display: false
        }
    }
    
};

// function that displays chart thats selected.
function displayChart() {
    if (document.getElementById('hour3').checked) {
        destroyChart();
        makeChart(Hourly);
    } else if  (document.getElementById('day3').checked) {
        destroyChart();
        makeChart(Daily);
    } else if  (document.getElementById('week3').checked) {
        destroyChart();
        makeChart(Weekly);
    } else  {
        destroyChart();
        makeChart(Monthly);
    };
}

//  event listener for traffic chart
for (let i = 0; i < updateChart.length; i++) {
    updateChart[i].onclick = function () {
        if(this !== prev) {
            prev = this;
        }
        displayChart(); 
    }
}

// chart creation
function makeChart(chart) {
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: chart,
        options: trafficOptions
    });
};
// chart destruction
function destroyChart() {
    trafficChart.destroy();
};

makeChart(Hourly);

//-------------- Daily Chart---------------//
const dailyData = {
    labels: ["S", "M", "T", "W" , "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(187, 134, 252,.60)',
        borderWidth: 1
    }],
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    plugins: {
        legend : {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//-------------- Mobile Chart---------------//

const mobileData = {
    labels: ["Desktop", "Tablet", "Phone"],
    datasets: [{
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
            align:' center'
        }, 
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


//-------------- MEMBERS & ACTIVITY---------------//

let members = [
    {
        name:'Jasen Murphy',
        email:'jasen.murphy@example.com',
        profile:'images/member-1.jpg',
        recentActivity: {
            action:'commented on',
              item:"MyApp's SEO Tips",
              time:'4 hours ago' 
        }
    },
    {
           name: 'Dale Byrd',
          email: 'dale.byrd52@example.com',
        profile: 'images/member-2.jpg',
        recentActivity: {
          action: 'liked the post',
            item: "Facebook's Changes for 2021",
            time: '5 hours ago',
        }
      },
      {
           name: 'Dawn Wood',
          email: 'dawn.wood16@example.com',
        profile: 'images/member-3.jpg',
        recentActivity: {
          action: 'commented on',
            item: "Facebook's Changes for 2021",
            time: '5 hours ago',
        }
      },
      {
           name: 'Dan Oliver',
          email: 'dan.oliver82@example.com',
        profile: 'images/member-4.jpg',
        recentActivity: {
          action: 'posted',
            item: "YourApp's SEO Tips",
            time: '1 day ago',
        }
      },
    ]

for ( let i = 0; i < members.length; i++) {
    let member = members[i];
    newMembers += `
    <div class="members-container">
            <img src="${member.profile}" class="profile-image" alt="profile image">
        <div class="member-text">
            <p>${member.name}</p>
            <a href="#">${member.email}</a>
        </div>
        <p>03/29/2021</p>
    </div> 
    `;
    activity += `
    <div class="members-container">
            <img src="${member.profile}" class="profile-image" alt="profile image">
        <div class="member-text">
            <p>${member.name} ${member.recentActivity.action} ${member.recentActivity.item}</p>
        </div>
        <p>${member.recentActivity.time}</p>
    </div> 
    `
}
    membersHtml.innerHTML = `${newMembers}`;
    activityHtml.innerHTML = `${activity}`;



//-------------- MESSAGE ---------------//
    
const search = document.querySelector('#user-field');
const message = document.querySelector('#message-field');
const send = document.querySelector('#send');

// ------------ Search and Filter-------------//
const users = [ 
    "Mohammed Giles","Eddie Cordova","Ulises Spence","Sabrina Lucas","Brady Charles","Brenda Hill","Chase Dawson","Graham House","Nikolas Sexton","Damarion Olsen","Nico Madden","Bronson Lozano","Sanai Dawson","Azul Waters","Jasper Whitehead","Kendall Combs","Niko Arnold","Sophia Kramer","Lorena Stuart","Parker Randall","Everett Kemp","Kenzie Garner","Kaelyn Hammond","Madelyn Hampton","Geovanni Green","Bridget Vaughn","Irene Anthony","Ariel Frazier","Edith Shah","Destinee Chapman","Kian Rosario","Chris Ford","Ben Bridges","Tucker Hebert","Parker Castillo","Barrett Greene","Jaylynn Snyder","Travis Stevens","Sophie Kaiser","Tyrell Molina", "Jasen Murphy", "Dale Byrd", "Dawn Wood", "Dan Oliver"];

const searchDiv = document.querySelector('.searchDiv');
// search
const suggestionsBox = document.querySelector('.suggestions');
// users

search.onkeyup = (e) => {
    let userSearch = e.target.value;
    let potentials = [];
    if (userSearch) {
        potentials = users.filter((data) => {
            return data.toLocaleLowerCase().includes(userSearch.toLocaleLowerCase());
        });
    suggestionsBox.classList.add('show');
    } else {
    suggestionsBox.classList.remove('show');
    }

    makeSugggestionList(potentials);
};

function makeSugggestionList(listOfUsers) {
    while (suggestionsBox.lastChild) {
        suggestionsBox.removeChild(suggestionsBox.lastChild);
    }
    if (listOfUsers.length === 0 ) {
        listOfUsers.push(search.value)
    }
    listOfUsers.forEach(name => {
        let userLi = createElement('li', name, 'user' , suggestionsBox)
        userLi.setAttribute('onclick', 'select(this)')
    })
}

function select (element) {
    search.value = element.textContent;
    searchDiv.classList.remove('active');
}

function createElement(elem, content, classy, adult) {
    let element = document.createElement(elem);
    element.textContent = content;
    element.setAttribute("class", classy);
    adult.appendChild(element);
    return element;
  }



send.addEventListener('click', () => {
  if (search.value === '' && message.value === '') {
  window.alert('Please fill out both the user and message fields before sending.');
  } else if (search.value === '' ) {
  window.alert('User has not been selected');
  } else if (message.value === '' ) {
  window.alert('Message field is blank.');
  } else {
  window.alert(`Message has been sent to: ${search.value}.`);
  }
  search.value = '';
  message.value = '';
});

// ------------ SETTINGS & STORAGE-------------//

const emailSwitch = document.querySelector('#emailSwitch');
const publicSwitch = document.querySelector('#publicSwitch');
const timezone = document.querySelector('#timezone');
const save = document.querySelector('#save');

save.addEventListener('click', () => {
    const emailValue = emailSwitch.checked;
    const publicValue = publicSwitch.checked;
    const timeValue = timezone.selectedIndex;
    localStorage.setItem('email notification',emailValue);
    localStorage.setItem('public notification',publicValue);
    localStorage.setItem('time notification',timeValue);
});

function load() {
    emailSwitch.checked = JSON.parse(localStorage.getItem('email notification'));
    publicSwitch.checked = JSON.parse(localStorage.getItem('public notification'));
    timezone.selectedIndex = JSON.parse(localStorage.getItem('time notification'));
}
load();

const cancel = document.getElementById('cancel');

cancel.addEventListener('click', () => {
  localStorage.removeItem('email notification');
  localStorage.removeItem('public notification');
  localStorage.removeItem('time notification');
  location.reload();
});