const path = require('path');
const { buildApp } = require('./app');
const express = require('express');
const app = buildApp();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '/public')));

app.get(/^(.*)$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
