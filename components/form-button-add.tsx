'use client';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export default function AddTodo() {
  const { pending } = useFormStatus();

  return (
    <Button size='sm' disabled={pending} type='submit'>
      Add Todo
    </Button>
  );
}
