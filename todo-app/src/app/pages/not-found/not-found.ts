import { Component } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-not-found',
    template: `
        <div
            class="min-h-screen w-screen flex items-center justify-center background text-gray-100 px-6 relative overflow-hidden"
        >
            <!-- Background decoration -->
            <!--      <div-->
            <!--        class="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -top-32 -left-32"-->
            <!--      ></div>-->
            <!--      <div-->
            <!--        class="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -bottom-32 -right-32"-->
            <!--      ></div>-->

            <div class="relative z-10 text-center max-w-lg">
                <!-- Icon -->
                <div
                    class="mx-auto mb-8 flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 shadow-xl"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-10 h-10 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1.5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.172 16.172a4 4 0 0 1 5.656 0M9 10h.01M15 10h.01M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"
                        />
                    </svg>
                </div>

                <!-- Error code -->
                <h1
                    class="text-8xl sm:text-9xl font-black tracking-tighter bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                    404
                </h1>

                <!-- Message -->
                <h2 class="mt-5 text-2xl sm:text-3xl font-bold tracking-tight">Page Not Found</h2>

                <p class="mt-4 text-slate-400 leading-relaxed">
                    Oops! It looks like you’ve lost your way. The page you are looking for does not
                    exist, has been removed, or is temporarily unavailable.
                </p>

                <!-- Action -->
                <div class="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="/"
                        class="w-full sm:w-auto px-7 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-indigo-500/20"
                    >
                        ← Back to home
                    </a>

                    <button
                        onclick="history.back()"
                        class="w-full sm:w-auto px-7 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium transition-all duration-300"
                    >
                        Back to previous page
                    </button>
                </div>

                <p class="mt-12 text-xs text-slate-600">ERROR 404 · Page not found</p>
            </div>
        </div>
    `,
})
export class NotFound {}
