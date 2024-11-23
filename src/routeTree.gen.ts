/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as SalesIndexImport } from './routes/sales/index'
import { Route as MapIndexImport } from './routes/map/index'
import { Route as HomeIndexImport } from './routes/home/index'
import { Route as EventsIndexImport } from './routes/events/index'
import { Route as DinnerIndexImport } from './routes/dinner/index'
import { Route as CalendarIndexImport } from './routes/calendar/index'
import { Route as HomeInfoCardImport } from './routes/home/infoCard'
import { Route as EventsCreateImport } from './routes/events/create'
import { Route as EventsEventIdImport } from './routes/events/$eventId'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SalesIndexRoute = SalesIndexImport.update({
  path: '/sales/',
  getParentRoute: () => rootRoute,
} as any)

const MapIndexRoute = MapIndexImport.update({
  path: '/map/',
  getParentRoute: () => rootRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  path: '/home/',
  getParentRoute: () => rootRoute,
} as any)

const EventsIndexRoute = EventsIndexImport.update({
  path: '/events/',
  getParentRoute: () => rootRoute,
} as any)

const DinnerIndexRoute = DinnerIndexImport.update({
  path: '/dinner/',
  getParentRoute: () => rootRoute,
} as any)

const CalendarIndexRoute = CalendarIndexImport.update({
  path: '/calendar/',
  getParentRoute: () => rootRoute,
} as any)

const HomeInfoCardRoute = HomeInfoCardImport.update({
  path: '/home/infoCard',
  getParentRoute: () => rootRoute,
} as any)

const EventsCreateRoute = EventsCreateImport.update({
  path: '/events/create',
  getParentRoute: () => rootRoute,
} as any)

const EventsEventIdRoute = EventsEventIdImport.update({
  path: '/events/$eventId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/events/$eventId': {
      id: '/events/$eventId'
      path: '/events/$eventId'
      fullPath: '/events/$eventId'
      preLoaderRoute: typeof EventsEventIdImport
      parentRoute: typeof rootRoute
    }
    '/events/create': {
      id: '/events/create'
      path: '/events/create'
      fullPath: '/events/create'
      preLoaderRoute: typeof EventsCreateImport
      parentRoute: typeof rootRoute
    }
    '/home/infoCard': {
      id: '/home/infoCard'
      path: '/home/infoCard'
      fullPath: '/home/infoCard'
      preLoaderRoute: typeof HomeInfoCardImport
      parentRoute: typeof rootRoute
    }
    '/calendar/': {
      id: '/calendar/'
      path: '/calendar'
      fullPath: '/calendar'
      preLoaderRoute: typeof CalendarIndexImport
      parentRoute: typeof rootRoute
    }
    '/dinner/': {
      id: '/dinner/'
      path: '/dinner'
      fullPath: '/dinner'
      preLoaderRoute: typeof DinnerIndexImport
      parentRoute: typeof rootRoute
    }
    '/events/': {
      id: '/events/'
      path: '/events'
      fullPath: '/events'
      preLoaderRoute: typeof EventsIndexImport
      parentRoute: typeof rootRoute
    }
    '/home/': {
      id: '/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof rootRoute
    }
    '/map/': {
      id: '/map/'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof MapIndexImport
      parentRoute: typeof rootRoute
    }
    '/sales/': {
      id: '/sales/'
      path: '/sales'
      fullPath: '/sales'
      preLoaderRoute: typeof SalesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/events/$eventId': typeof EventsEventIdRoute
  '/events/create': typeof EventsCreateRoute
  '/home/infoCard': typeof HomeInfoCardRoute
  '/calendar': typeof CalendarIndexRoute
  '/dinner': typeof DinnerIndexRoute
  '/events': typeof EventsIndexRoute
  '/home': typeof HomeIndexRoute
  '/map': typeof MapIndexRoute
  '/sales': typeof SalesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/events/$eventId': typeof EventsEventIdRoute
  '/events/create': typeof EventsCreateRoute
  '/home/infoCard': typeof HomeInfoCardRoute
  '/calendar': typeof CalendarIndexRoute
  '/dinner': typeof DinnerIndexRoute
  '/events': typeof EventsIndexRoute
  '/home': typeof HomeIndexRoute
  '/map': typeof MapIndexRoute
  '/sales': typeof SalesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/events/$eventId': typeof EventsEventIdRoute
  '/events/create': typeof EventsCreateRoute
  '/home/infoCard': typeof HomeInfoCardRoute
  '/calendar/': typeof CalendarIndexRoute
  '/dinner/': typeof DinnerIndexRoute
  '/events/': typeof EventsIndexRoute
  '/home/': typeof HomeIndexRoute
  '/map/': typeof MapIndexRoute
  '/sales/': typeof SalesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/events/$eventId'
    | '/events/create'
    | '/home/infoCard'
    | '/calendar'
    | '/dinner'
    | '/events'
    | '/home'
    | '/map'
    | '/sales'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/events/$eventId'
    | '/events/create'
    | '/home/infoCard'
    | '/calendar'
    | '/dinner'
    | '/events'
    | '/home'
    | '/map'
    | '/sales'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/events/$eventId'
    | '/events/create'
    | '/home/infoCard'
    | '/calendar/'
    | '/dinner/'
    | '/events/'
    | '/home/'
    | '/map/'
    | '/sales/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRoute
  EventsEventIdRoute: typeof EventsEventIdRoute
  EventsCreateRoute: typeof EventsCreateRoute
  HomeInfoCardRoute: typeof HomeInfoCardRoute
  CalendarIndexRoute: typeof CalendarIndexRoute
  DinnerIndexRoute: typeof DinnerIndexRoute
  EventsIndexRoute: typeof EventsIndexRoute
  HomeIndexRoute: typeof HomeIndexRoute
  MapIndexRoute: typeof MapIndexRoute
  SalesIndexRoute: typeof SalesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  EventsEventIdRoute: EventsEventIdRoute,
  EventsCreateRoute: EventsCreateRoute,
  HomeInfoCardRoute: HomeInfoCardRoute,
  CalendarIndexRoute: CalendarIndexRoute,
  DinnerIndexRoute: DinnerIndexRoute,
  EventsIndexRoute: EventsIndexRoute,
  HomeIndexRoute: HomeIndexRoute,
  MapIndexRoute: MapIndexRoute,
  SalesIndexRoute: SalesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/events/$eventId",
        "/events/create",
        "/home/infoCard",
        "/calendar/",
        "/dinner/",
        "/events/",
        "/home/",
        "/map/",
        "/sales/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/events/$eventId": {
      "filePath": "events/$eventId.tsx"
    },
    "/events/create": {
      "filePath": "events/create.tsx"
    },
    "/home/infoCard": {
      "filePath": "home/infoCard.tsx"
    },
    "/calendar/": {
      "filePath": "calendar/index.tsx"
    },
    "/dinner/": {
      "filePath": "dinner/index.tsx"
    },
    "/events/": {
      "filePath": "events/index.tsx"
    },
    "/home/": {
      "filePath": "home/index.tsx"
    },
    "/map/": {
      "filePath": "map/index.tsx"
    },
    "/sales/": {
      "filePath": "sales/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
