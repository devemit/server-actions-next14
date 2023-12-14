'use server';
import { db } from '@/utils/db';
import { revalidatePath } from 'next/cache';

export async function createTodo(formData: FormData) {
  const title = formData.get('title') as string;

  await db.todo.create({
    data: {
      title,
      completed: false,
    },
  });
  revalidatePath('/');
}
