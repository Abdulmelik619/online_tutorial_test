import * as mongoose from 'mongoose';

export class Course {
  constructor(
    public id: string,
    public name: string,
    public TeacherId: string,
    public Users: [string],
  ) {}
}

export const courseSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  TeacherId: { type: String },
  Users: { type: [String] },
});
