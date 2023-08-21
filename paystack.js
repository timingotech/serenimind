document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();


    const publicKey = 'pk_test_a7190862b89d8656b52a586c50ee3d5e89488fdf';

    const amount = document.getElementById('amount').value || '0.00';
    
    PaystackPop.setup({
        key: publicKey,
        email: 'timingotech@gmail.com', 
        amount: parseFloat(amount) * 100, // Convert amount to kobo (Paystack uses kobo)
        currency: 'NGN', // Nigerian Naira
        callback: function(response) {
            alert('Payment successful! Thank you for your support.');
        },
        onClose: function() {
            alert('Payment window closed. If you have any issues, please contact us.');
        }
    }).openIframe();
});
