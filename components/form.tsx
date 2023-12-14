import { createTodo } from '@/actions/createTodo';
import FormInput from './form-input';
import AddTodo from './form-button-add';

export default function Form() {
  return (
    <form action={createTodo} className='flex items-center gap-2'>
      <FormInput />
      <AddTodo />
    </form>
  );
}
