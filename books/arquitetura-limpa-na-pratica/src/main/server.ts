import 'module-alias/register';
import { MongoHelper } from '@/external/repositories/mondogb/helper';

MongoHelper.connect(process.env.MONGO_URL)
  .then(async () => {
    const app = (await import('./config/app')).default;
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  })
  .catch(console.error);
