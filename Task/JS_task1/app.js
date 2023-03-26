//block 1
const requestBtn = document.querySelector("#get-noti-access-btn");
const sendNotiBtn = document.querySelector("#send-noti-btn");

//block 2
const getNotificationAccess = () => {
  console.log("get noti access");
  if (window.Notification) {
    Notification.requestPermission().then((permission) => {
      console.log(permission);
    });
  } else {
    console.log("No noti avaialble in browser");
  }
};

//block 3
const sendNotification = () => {
  console.log("send noti");
  setTimeout(() => {
    const notification = new Notification("hello");
  }, 5000);
};

//block 4
requestBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getNotificationAccess();
});

sendNotiBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendNotification();
});