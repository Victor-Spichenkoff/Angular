import { Routes } from '@angular/router';

export const TODOS_ROUTES: Routes = [
  {
    path: '', // /todos
    title: 'ToDos',
    loadComponent: () => import('./pages/main-todo-page/main-todo-page').then((m) => m.MainTodoPage),
  },
  // {
  //   path: ':id', // /todos/:id
  //   title: 'Detalhe da tarefa',
  //   loadComponent: () =>
  //     import('./pages/detail-todo-page/detail-todo-page').then((m) => m.DetailTodoPage),
  // },
];
