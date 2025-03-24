export default function handler(req, res) {
       if (req.headers['x-secret'] !== 'YOUR_SECRET_KEY') {
         return res.status(403).json({ error: 'Unauthorized' });
       }
       console.log('Webhook received:', req.body);
       res.status(200).json({ success: true });
}
