import app from './app';

const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  process.env.NODE_ENV === 'development' &&
    console.log(`App can be accessed on http://localhost:${PORT}`)
);
