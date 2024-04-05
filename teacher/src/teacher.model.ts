import * as mongoose from 'mongoose';

export class Teacher {
  constructor(public id: string, public name: string) {}
}

export const teacherSchema = new mongoose.Schema({
  name: { type: String, unique: true }
});
