import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("places.db"); // places.db not Existed, but thil line will create it

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )`,
        [],
        () => {
          //success
          resolve();
        },
        (_, error) => {
          reject(error);
        } //error
      );
    });
  });

  return promise;
}
