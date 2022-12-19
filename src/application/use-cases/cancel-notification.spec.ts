import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";

describe("Cancel Notification", () => {
  it("should be able to cancel a notification", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository)

    const notification = new Notification({
      category: "social",
      content: new Content("This is a notification"),
      recipientId: "example-recipient-id"
    })

    await cancelNotification.execute({ notificationId: notification.id })

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
