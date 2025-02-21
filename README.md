# NextAuth session undefined after deploying to Vercel

This repository demonstrates a common issue when using NextAuth.js with getServerSideProps or getStaticProps. The session object returned by `unstable_getServerSession` is often undefined after deploying to Vercel, even though it works locally.

The core problem is the usage of the session within a component.  `unstable_getServerSession` needs to be called within a page's API route (`pages/api/[...]`), not directly within a component's function.  Attempting to access the session directly within a functional component will fail after deployment.

The solution demonstrates how to correctly fetch and pass the session data from the API route to the component using props.