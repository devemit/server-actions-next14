import { getAllTodos } from '@/actions/getAllTodos';
import Form from '@/components/form';
import Todo from '@/components/todo';

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <main className='flex min-h-screen flex-col items-center p-24 bg-slate-300'>
      <Form />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} title={todo.title} id={todo.id} />
        ))}
      </ul>
    </main>
  );
}
