import { deleteTodo } from '@/actions/deleteTodo';
import DeleteTodo from './form-button-delete';
export default function Todo({ title, id }: { title: string; id: number }) {
  return (
    <div className='flex my-4 gap-8 items-center'>
      <li className='font-semibold text-slate-600'>{title}</li>
      <form action={deleteTodo.bind(null, id)}>
        <DeleteTodo />
      </form>
    </div>
  );
}
