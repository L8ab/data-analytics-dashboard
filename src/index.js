const express = require('express');
const analyticsService = require('./services/analyticsService');

const app = express();
app.use(express.json());

app.get('/api/analytics', (req, res) => {
  res.json(analyticsService.getSummary());
});

app.post('/api/analytics/track', (req, res) => {
  analyticsService.trackEvent(req.body.event, req.body.data);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Analytics Dashboard running on port ${PORT}`);
});
