# Addressing RSC and Dot Notation Issues

This is the demo repository for the blog post [Multipart Namespace Components: Addressing RSC and Dot Notation Issues](https://ivicabatinic.from.hr/posts/multipart-namespace-components-addressing-rsc-and-dot-notation-issues?ck_subscriber_id=1866524825&utm_source=convertkit&utm_medium=email&utm_campaign=%E2%9A%9B%EF%B8%8F%20This%20Week%20In%20React%20#198:%20React-Email,%20MUI,%20Rspack,%20prerendering,%20tree-shaking,%20Next.js,%20TanStack,%20Remix,%20RSC,%20Code%20Hike,%20Astro,%20CodePush,%20visionOS,%20Tophat,%20Bluetooth,%20MKKV,%20Swift,%20Re.Pack,%20Reanimated,%20TypeScript,%20Node...%20-%2014840825).

## Running the demo

1. run `yarn install`
2. run `yarn web build`
3. search for the "BODY" string in the `./apps/web/.next` folder

search result example:
```
// .next/static/chunks/app/page-39722969c1aa8727.js

("div",{children:"BODY"}),u=()=>(0,i.jsx)("div",{children:"HEADER"}),c=()=>(0,i.jsx)("div",{children:"FOOTER"}),o=()=>(0,i.jsx)("div",{children:"TITLE"}),s=()=>(0,i.jsx)("div",{children:"DESCRIPTION"})}}
```

The goal is to have only the `BODY` component bundled in the `page-39722969c1aa8727.js` file, while the `HEADER`, `FOOTER`, `TITLE`, and `DESCRIPTION` components should be tree-shaken from the bundle.