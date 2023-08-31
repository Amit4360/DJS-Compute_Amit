function totalCost() {
    const quantityInput = document.getElementById("quantity");
    const quantity = quantityInput.value;

    const price = 10;

    let discount = 0;

    if (quantity >= 5 && quantity <= 10) {
        discount = 10;
    } else if (quantity > 10) {
        discount = 20;
    }

    const totalCost = quantity * price * (1-discount/100);

    document.getElementById("result").innerText = `Total Cost: $${totalCost.toString()}`;
}