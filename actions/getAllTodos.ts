import { db } from '@/utils/db';

export async function getAllTodos() {
  return db.todo.findMany();
}
