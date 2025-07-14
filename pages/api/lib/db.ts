import Database from "better-sqlite3";

export function getDB() {
  return new Database("database.db");
}
