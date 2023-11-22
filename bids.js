document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const auctionItemId = urlParams.get('id');

    if (auctionItemId) {
        // Display bid form for the selected auction item
        showBidForm(auctionItemId);
    } else {
        // Redirect to the auctions page if no auction item ID is provided
        window.location.href = 'index.html';
    }

    // Set up event listener
    document.getElementById('submitBidButton').addEventListener('click', placeBid);
});

function showBidForm(auctionItemId) {
    // Make a request to your backend API to get details of the selected auction item
    // Update the bid form with the fetched data
    const bidForm = document.getElementById('bid-form');
    bidForm.classList.remove('hidden');

    // Example data (replace this with actual API call)
    const item = { id: auctionItemId, name: 'Auction Item', currentBid: 100000 };
    
    document.getElementById('bid-form').innerHTML = `
        <h2>Place Bid for ${item.name}</h2>
        <p>Current Bid: ${item.currentBid}</p>
        <label for="bidAmount">Bid Amount: </label>
        <input type="number" id="bidAmount" min="1" step="1">
        <button id="submitBidButton">Submit Bid</button>
    `;
}

function placeBid() {
    const bidAmount = document.getElementById('bidAmount').value;
    // Make a request to your backend API to place a bid
    // Update the UI with the new bid information
    // You might want to handle errors and edge cases here
    alert(`Bid placed successfully for $${bidAmount}`);
    // Optionally, hide the bid form after placing a bid
    document.getElementById('bid-form').classList.add('hidden');
}
