'use client';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
export default function DeleteTodo() {
  const { pending } = useFormStatus();

  return (
    <Button size='sm' disabled={pending} variant='destructive'>
      Delete
    </Button>
  );
}
