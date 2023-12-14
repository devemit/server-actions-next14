'use server';

import { db } from '@/utils/db';
import { revalidatePath } from 'next/cache';

export async function deleteTodo(id: number) {
  await db.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath('/');
}
