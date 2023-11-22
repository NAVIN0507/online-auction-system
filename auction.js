document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display auction items
    fetchAuctionItems();

    // Set up event listeners
    document.getElementById('auction-list').addEventListener('click', (event) => {
        if (event.target.classList.contains('place-bid-button')) {
            const auctionItemId = event.target.dataset.auctionItemId;
            window.location.href = `bids.html?id=${auctionItemId}`;
        }
    });
});

function fetchAuctionItems() {
    // Make a request to your backend API to get auction items
    // Update the HTML with the fetched data
    const auctionList = document.getElementById('auction-list');

    // Example data (replace this with actual API call)
    const data = [
        { id: 1, name: 'Auction Item 1', description: 'Mac Book Pro', currentBid: 100000, image: 'laptop.jpeg' },
        { id: 2, name: 'Auction Item 2', description: 'Consectetur adipiscing elit.', currentBid: 150, image: 'pixel6a.jpeg' },
        // Add more items as needed
    ];

    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('auction-item');
        itemElement.innerHTML = `
            <h2>${item.name}</h2>
            <img src="${item.image}" alt="${item.name}" style="max-width: 100%;">
            <p>Description: ${item.description}</p>
            <p>Current Bid: ${item.currentBid}</p>
            <button class="place-bid-button" data-auction-item-id="${item.id}">Place Bid</button>
        `;
        auctionList.appendChild(itemElement);
    });
}
