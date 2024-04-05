import * as mongoose from 'mongoose';

export class User {
  constructor(public id: string, public name: string) {}
}

export const userSchema = new mongoose.Schema({
  name: { type: String, unique: true }
});
