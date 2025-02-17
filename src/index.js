import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';

const bootstrap = async () => {
  await initMongoDB();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  startServer();
};

void bootstrap();

// import express from 'express';

// const app = express();

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// import express from 'express';

// const PORT = 3000;

// const app = express();

// app.get('/', (req, res) => {
//   // тіло функції-обробника
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });

// import express from 'express';

// const PORT = 3000;

// const app = express();

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world',
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });

// import express from 'express';

// const PORT = 3000;

// const app = express();

// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// import express from 'express';

// const PORT = 3000;

// const app = express();

// // Middleware для логування часу запиту
// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });

// // Вбудований у express middleware для обробки (парсингу) JSON-даних у запитах
// // наприклад, у запитах POST або PATCH
// app.use(express.json());

// // Маршрут для обробки GET-запитів на '/'
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello, World!',
//   });
// });

// // Middleware для обробких помилок (приймає 4 аргументи)
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// ------------------Кастомні мідлвеар-----------------
// import express from 'express';

// const PORT = 3000;

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World!',
//   });
// });

// app.use('*', (req, res, next) => {
//   res.status(404).json({
//     message: 'Not found',
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// --------------------------------------------------------------------

// import express from 'express';
// import pino from 'pino-http';
// import cors from 'cors';

// const PORT = 3000;

// const app = express();
// app.use(cors());

// app.use(
//   pino({
//     transport: {
//       target: 'pino-pretty',
//     },
//   }),
// );

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world!',
//   });
// });

// app.use('*', (req, res, next) => {
//   res.status(404).json({
//     message: 'Not found',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
