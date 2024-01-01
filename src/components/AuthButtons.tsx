import { Show} from 'solid-js';
import type { Session } from '@supabase/supabase-js';

export default function AuthButtons({session}: {session: Session | null}) {

    console.log("session: ", session);

    return (
        <>
            <Show when={session != null}>
                <li>
                    <a href="/dashboard" class="block text-zinc-900 dark:text-gray-200">Dashboard</a>
                </li>
            </Show>
            <Show when={session == null}>
                <li>
                    <a href="/register" class="block text-zinc-900 dark:text-gray-200">Register</a>
                </li>
                <li>
                    <a href="/signin" class="block text-zinc-900 dark:text-gray-200">Sign in</a>
                </li>
            </Show>
        </>
    );
}