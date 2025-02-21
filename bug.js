```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Page({props}){ // the 'props' here is wrong
  const session = await unstable_getServerSession(ctx, authOptions);
  console.log(session);
  return (
    <div>
      <h1>Hello {session?.user?.name}</h1>
    </div>
  );
}
```