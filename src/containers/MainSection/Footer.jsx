import React from 'react'

const Footer = () => {
    return (
        <>

            <footer class="flex flex-col items-center justify-between px-10 py-4 mt-10 dark:bg-gray-800 sm:flex-row">
                <a href="#" class="text-xl font-bold text-gray-600 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Podcast</a>

                <p class="py-2 text-gray-500 dark:text-white sm:py-0">MIT License</p>

                <div class="flex -mx-2">
                    <a href="http://github.com" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                        Github
                </a>

                    <a href="htttp://twitter.com" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                        aria-label="Facebook">
                        Twitter
                </a>
                </div>
            </footer>
        </>
    )
}

export default Footer