const alertBanner = document.querySelector('#alert');
const notification = document.querySelector('#notification')
const closeButton = [alertBanner, notification];
const trafficCanvas = document.querySelector('#traffic-chart')
const dailyCanvas = document.querySelector('#daily-chart')
const mobileCanvas = document.querySelector('#mobile-chart')
const traffic = document.querySelector('#traffic')
const bell = document.querySelector(".notification")
const bellItems = document.querySelectorAll('.bell-item')

function close(btn) {
    if (btn.classList.contains("clsBtn")) {
        btn.parent.style.display = "none";
    }
} 

//-------------- Alert-Banner & Notification---------------//
alertBanner.innerHTML = `
    <div class="alert-banner">
    <p><strong>Alert:</strong> You have overdue tasks to complete </p> <p class="clsBtn">X</p>
    </div>
`;

notification.innerHTML = ` 
    <div class="notification-item" >
        <div><p>Dale Byrd Liked ...</p><p class="clsBtn">X</p></div>
        <div><p>Dawn Wood commented...</p><p class="clsBtn">X</p></div>
        <div><p>Dan Oliver made a post...</p><p class="clsBtn">X</p></div>
    </div> 
`;


// remove notification event Listener
closeButton.forEach(item => {
    item.addEventListener('click', e => {
        if(e.target.className === 'clsBtn'){   
            let parentEl = e.target.parentElement; 
        
            parentEl.style.display = "none";
            
    }
});
}
);




//-------------- Traffic Chart---------------//

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12" , "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        label: '# of Hits',
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500], 
        fill:true,
        backgroundColor: '#bb86fc',
        borderWidth: 1
    }]
};

let trafficUpdate = {
    
    monthly: {
        labels: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            data: [1403, 1975, 1515, 866, 1988, 2207, 739, 2339, 2250, 2416, 1520], 
            fill:true,
            backgroundColor: '#bb86fc',
            borderWidth: 1,
            }]
    },

    weekly: {
        labels: ["16-22", "23-29", "30-5", "6-12" , "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets:[{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            fill:true,
            backgroundColor: '#bb86fc',
            borderWidth: 1,
            }]
    },

    daily: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets:[{
            data: [750, 1000, 1500, 1750,  1850, 1500, 2500],
            fill:true,
            backgroundColor: '#bb86fc',
            borderWidth: 1,
            }]
    },
    hourly: {
        labels: ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
        datasets:[{
            data: [1331, 2623, 2728, 2432, 588, 2676, 2381, 2990, 629],
            fill:true,
            backgroundColor: '#bb86fc',
            borderWidth: 1,
            }]
    },
} 

let trafficOptions = {
    aspectRation: 2.5,
    animation: {
        duration: 0,
    },
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


let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


//-------------- Daily Chart---------------//
const dailyData = {
    labels: ["S", "M", "T", "W" , "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#bb86fc',
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

//-------------- Bell Notification---------------//



    
    