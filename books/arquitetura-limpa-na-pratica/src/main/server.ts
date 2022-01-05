import 'module-alias/register';
import { MongoHelper } from '@/external/repositories/mondogb/helper';

MongoHelper.connect('mongodb://localhost:27017')
  .then(async () => {
    const app = (await import('./config/app')).default;
    app.listen(5000, () => {
      console.log('server listening on 5000');
    });
  })
  .catch(console.error);
