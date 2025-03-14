const cron = require("node-cron");
const { subDays, startOfDay, endOfDay } = require("date-fns");
const sendEmail = require("./sendEmail");
const connectionRequests = require("../models/connectionRequest");

cron.schedule("0 8 * * *", async () => {
  // send emails at 8am to all people who got requests the previous day

  try {
    const yesterday = subDays(new Date(), 1);

    const yesterdayStart = startOfDay(yesterday);

    const yesterdayEnd = endOfDay(yesterday);

    const pendingRequets = await connectionRequests
      .find({
        status: "interested",
        createdAt: {
          $gte: yesterdayStart,
          $lt: yesterdayEnd,
        },
      })
      .populate("fromUserId toUserId");

    const listOfEmails = [
      ...new Set(pendingRequets.map((req) => req.toUserId.emailId)),
    ];
    console.log(listOfEmails);

    for (const email of listOfEmails) {
      // Send Emails
      try {
        const res = await sendEmail.run(
          "New Friend Requests pending for " + email,
          "There are so many friend requests pending, please login to lindev.info and accept or reject the requests."
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  } catch (e) {
    console.error("Error sending emails" + e.message);
  }
});
