// script.js
const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY'); // Stripe API anahtarınızı buraya ekleyin

document.addEventListener('DOMContentLoaded', function () {
    const payButton = document.getElementById('pay-button');
    payButton.addEventListener('click', function () {
        stripe.redirectToCheckout({
            items: [{ sku: 'YOUR_SKU_ID', quantity: 1 }], // Ürün SKU ve miktarınızı buraya ekleyin
            successUrl: 'success.html', // Ödeme başarılı olduğunda yönlendirilecek sayfa
            cancelUrl: 'cancel.html', // Ödeme iptal edildiğinde yönlendirilecek sayfa
        });
    });
});




