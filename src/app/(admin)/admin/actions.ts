'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  authConfigured,
  makeSessionToken,
  passwordMatches,
  requireAdmin,
  SESSION_COOKIE,
  sessionCookieOptions,
} from '@/lib/board/auth';
import {
  createPost,
  deletePost,
  setPublished,
  updatePost,
  validateBoardInput,
  type BoardInput,
} from '@/lib/board/db';

export type FormState = { error?: string };

export async function loginAction(_prev: FormState, formData: FormData): Promise<FormState> {
  if (!authConfigured())
    return {
      error: '관리자 비밀번호가 아직 설정되지 않았습니다. 설정 방법은 관리자에게 문의하세요.',
    };
  const password = String(formData.get('password') ?? '');
  // 무작위 대입을 조금 늦춥니다.
  await new Promise((r) => setTimeout(r, 600));
  if (!(await passwordMatches(password))) return { error: '비밀번호가 맞지 않습니다.' };
  (await cookies()).set(SESSION_COOKIE, await makeSessionToken(), sessionCookieOptions);
  redirect('/admin');
}

export async function logoutAction() {
  (await cookies()).delete({ name: SESSION_COOKIE, path: '/admin' });
  redirect('/admin');
}

function readInput(formData: FormData): BoardInput {
  return {
    title: String(formData.get('title') ?? ''),
    body: String(formData.get('body') ?? ''),
    category: String(formData.get('category') ?? ''),
    published_at: String(formData.get('published_at') ?? ''),
    is_published: formData.get('is_published') === 'on',
  };
}

export async function savePostAction(_prev: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const input = readInput(formData);
  const error = validateBoardInput(input);
  if (error) return { error };

  const id = Number(formData.get('id') ?? 0);
  try {
    if (id > 0) await updatePost(id, input);
    else await createPost(input);
  } catch {
    return { error: '저장하지 못했습니다. 잠시 후 다시 시도해 주세요.' };
  }
  redirect('/admin?saved=1');
}

export async function deletePostAction(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get('id') ?? 0);
  if (id > 0) await deletePost(id);
  redirect('/admin?deleted=1');
}

export async function togglePublishedAction(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get('id') ?? 0);
  const next = formData.get('next') === '1';
  if (id > 0) await setPublished(id, next);
  redirect('/admin');
}
