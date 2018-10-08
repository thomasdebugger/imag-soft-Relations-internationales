import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() {
    // TODO connect to mySQL database
  }

  selectAll(table: string) {
    // Build request
    const request = 'SELECT * FROM localDataBase.' + table + ';';

    // TODO MySQL treatment
  }

  selectWhere(table: string, where: string) {
    // Build request
    const request = 'SELECT * FROM localDataBase.' + table + ' WHERE ' + where + ';';

    // TODO MySQL treatment
  }

  insertInto(table: string, values: string[]) {
    // Build request
    let request = 'INSERT INTO localDataBase.' + table + ' VALUES (';
    // Add a value to insert
    for (let index = 0; index < values.length; index++) {
      if (index > 0) {
        request += ', ';
      }
      request += '"' + values[index] + '"';
    }
    // Close request
    request += ');';

    // TODO MySQL treatment
  }

  delete(table: string, where: string) {
    // Build request
    const request = 'SELECT * FROM localDataBase.' + table + ' WHERE ' + where + ';';

    // TODO MySQL treatment
  }

  update(table: string, set: string[], where: string) {
    // Build request
    let request = 'UPDATE localDataBase.' + table + ' SET ';
    // Add a value to update
    for (let index = 0; index < set.length; index++) {
      if (index > 0) {
        request += ', ';
      }
      request += '"' + set[index] + '"';
    }
    // Add where condition
    if (where.length > 0) {
      request += ' WHERE ' + where;
    }
    // Close reauest
    request += ';';

    // TODO MySQL treatment
  }
}
