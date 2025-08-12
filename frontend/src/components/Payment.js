import React from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Payment() {
  const handlePayment = async () => {
    toast.info('Donation feature is coming soon!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    /*
    try {
      const { data } = await axios.post('http://localhost:5000/api/payment/create-order', { amount: 5000 });
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "Support Developer",
        description: "Donation",
        order_id: data.orderId,
        handler: (res) => {
          toast.success(`Payment successful: ${res.razorpay_payment_id}`, {
            position: "top-center",
            autoClose: 3000,
          });
        },
        prefill: {
          name: "Ritik Raj Gupta",
          email: "test@example.com",
          contact: "9999999999"
        }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error('Error starting payment', { position: "top-center" });
    }
    */
  };

  return (
    <div className="container mt-5 pt-5 text-center">
      <h2>Support the Developer</h2>
      <button className="btn btn-warning mb-3" onClick={handlePayment}>
        Donate ₹50 (Coming soon....)
      </button>

      <div className="mt-4">
        <p><strong>Terms and Conditions</strong> <br />
          <a href="https://merchant.razorpay.com/policy/R3j35Xk98l9S6y/terms" target="_blank" rel="noopener noreferrer">
            Created by Razorpay
          </a>
        </p>
        <p><strong>Privacy Policy</strong> <br />
          <a href="https://merchant.razorpay.com/policy/R3j35Xk98l9S6y/privacy" target="_blank" rel="noopener noreferrer">
            Created by Razorpay
          </a>
        </p>
        <p><strong>Cancellations and Refunds</strong> <br />
          <a href="https://merchant.razorpay.com/policy/R3j35Xk98l9S6y/refund" target="_blank" rel="noopener noreferrer">
            Created by Razorpay
          </a>
        </p>
        <p><strong>Contact Us</strong> <br />
          <a href="https://merchant.razorpay.com/policy/R3j35Xk98l9S6y/contact_us" target="_blank" rel="noopener noreferrer">
            Created by Razorpay
          </a>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}
