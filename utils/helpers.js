import React from "react";
import { Text, AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const NOTIFICATION_KEY = "flashcards: decks";

function createNotification() {
  return {
    title: "Study Study Study!",
    body: "Don't forget to study today!",
    ios: {
      sound: true
    }
  };
}

// Look up docs
export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHourse(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export const formatCardLengthTitle = questions => {
  if (questions.length === 0) {
    return <Text>( 0 Cards )</Text>;
  } else if (questions.length > 1) {
    return <Text>( {questions.length} cards )</Text>;
  } else {
    return <Text>( 1 card )</Text>;
  }
};
