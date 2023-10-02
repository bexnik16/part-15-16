document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch isteği
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            console.log(json);

            
            var cardNumber = document.getElementById("cardNumber").value;
            var expiryDate = document.getElementById("expiryDate").value;
            var cvv = document.getElementById("cvv").value;

           
            alert("Ödeme işlemi başarıyla tamamlandı!");
        })
        .catch(error => {
            console.error('Hata:', error);
            alert("Ödeme işlemi sırasında bir hata oluştu.");
        });
});

