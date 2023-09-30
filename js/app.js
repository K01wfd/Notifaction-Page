let ntfCount = document.querySelector("#ntf-count");
const markAllAsRead = document.querySelector("#mark-all"); // mark all as read link
const allNotificationsCard = document.querySelectorAll(".unread-background"); // select all ntf cards

ntfCount.innerHTML = allNotificationsCard.length;
markAllAsRead.addEventListener("click", function () {
  allNotificationsCard.forEach((card) => {
    card.classList.remove("unread-background");
    const unreadNotifications = document.querySelectorAll(".unread-background");
    ntfCount.innerHTML = unreadNotifications.length;
  });
});

function individualeNtfToggle() {
  allNotificationsCard.forEach((card) => {
    card.addEventListener("click", function () {
      card.classList.remove("unread-background");
      const unreadNotifications =
        document.querySelectorAll(".unread-background");
      ntfCount.innerHTML = unreadNotifications.length;
    });
  });
}

individualeNtfToggle();
