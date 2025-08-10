const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/**
 * createOrder
 * body: { amount, currency, receipt }
 * amount in smallest currency unit (₹1 = 100)
 */
const createOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt = `receipt_${Date.now()}` } = req.body;

    if (!amount || typeof amount !== 'number') {
      return res.status(400).json({ error: 'amount (number) is required' });
    }

    const options = {
      amount, // in paise for INR
      currency,
      receipt,
      payment_capture: 1 // Auto capture payment
    };

    const order = await razorpay.orders.create(options);

    return res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.error('Razorpay order error:', error);
    return res.status(500).json({ error: 'Failed to create Razorpay order' });
  }
};

module.exports = { createOrder };
