'use client';
import { Input } from './ui/input';
import { useFormStatus } from 'react-dom';

export default function FormInput() {
  const { pending } = useFormStatus();

  return <Input type='text' name='title' disabled={pending} />;
}
