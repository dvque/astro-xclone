import { Show } from 'solid-js';


export default function AuthButtons({ accessToken, refreshToken }) {
    return (
        <>
            <Show when={accessToken && refreshToken}>
                <li>
                    <a href="/dashboard" class="block text-zinc-900 dark:text-gray-200">Dashboard</a>
                </li>
            </Show>
            <Show when={!accessToken && !refreshToken}>
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