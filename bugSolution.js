```javascript
// pages/api/auth/[...nextauth].js
// ... (Your existing NextAuth configuration)

// pages/index.js
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  return {
    props: {
      session: session
    }
  };
}

export default function Page({ session }) {  //Corrected this line
  console.log(session);
  return (
    <div>
      <h1>Hello {session?.user?.name}</h1>
    </div>
  );
}
```