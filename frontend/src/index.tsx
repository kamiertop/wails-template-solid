/* @refresh reload */
import {render} from 'solid-js/web'
import {RouterProvider, createRouter} from '@tanstack/solid-router'
import {routeTree} from './routeTree.gen'

const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
})

declare module '@tanstack/solid-router' {
    interface Register {
        router: typeof router
    }
}

const root = document.getElementById('root')

render(() => <RouterProvider router={router}/>, root!)
