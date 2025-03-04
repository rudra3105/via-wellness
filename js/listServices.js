// Pricing items data
const pricingData = [
	// Waxing (Lipo Soluble)
	{ img: "images/items/waxing_01.jpg", title: "Full Hand Wax", price: "₹600" },
	{ img: "images/items/waxing_02.jpg", title: "Half Leg Wax", price: "₹500" },
	{ img: "images/items/waxing_03.jpg", title: "Full Leg Wax", price: "₹1000" },
	{
		img: "images/items/waxing_04jpg",
		title: "B Wax (Lipo Soluble)",
		price: "₹1500",
	},
	{ img: "images/items/waxing_05jpg", title: "B Wax (Bean)", price: "₹1600" },
	{ img: "images/items/waxing_06jpg", title: "Underarms Wax", price: "₹350" },
	{ img: "images/items/waxing_07jpg", title: "Tummy Wax", price: "₹1000" },
	{ img: "images/items/waxing_08jpg", title: "Back Wax", price: "₹1200" },
	{ img: "images/items/waxing_09jpg", title: "Hips Wax", price: "₹1200" },

	// Body Care
	{ img: "images/items/body_care_01.jpg", title: "Body Scrub", price: "₹1800" },
	{ img: "images/items/body_care_02.jpg", title: "Hand Scrub", price: "₹600" },
	{ img: "images/items/body_care_03.jpg", title: "Foot Scrub", price: "₹800" },
	{ img: "images/items/body_care_04.jpg", title: "Back Scrub", price: "₹800" },
	{
		img: "images/items/body_care_05.jpg",
		title: "Body Polishing",
		price: "₹5000",
	},
	{
		img: "images/items/body_care_06.jpg",
		title: "Premium Body Polishing",
		price: "₹6000",
	},
	{
		img: "images/items/body_care_07.jpg",
		title: "Pro Whitening",
		price: "₹2500",
	},
	{
		img: "images/items/body_care_08.jpg",
		title: "Hand Polishing",
		price: "₹1000",
	},
	{
		img: "images/items/body_care_09.jpg",
		title: "Leg Polishing",
		price: "₹1000",
	},
	{
		img: "images/items/body_care_10.jpg",
		title: "Full Body Dtan",
		price: "₹2000",
	},
	{
		img: "images/items/body_care_11.jpg",
		title: "Full Body Bleach",
		price: "₹1800",
	},
	{ img: "images/items/body_care_12.jpg", title: "Hand Dtan", price: "₹999" },
	{ img: "images/items/body_care_13.jpg", title: "Leg Dtan", price: "₹999" },
	{
		img: "images/items/body_care_14.jpg",
		title: "Half Back Dtan",
		price: "₹999",
	},

	// Facial
	{ img: "images/items/facial_01.jpg", title: "Clean Up", price: "₹800" },
	{
		img: "images/items/facial_02.jpg",
		title: "Aromatic Facial",
		price: "₹1800",
	},
	{
		img: "images/items/facial_03.jpg",
		title: "Advanced Facial",
		price: "₹3000",
	},
	{
		img: "images/items/facial_04.jpg",
		title: "Resurfacing Facial",
		price: "₹3000",
	},
	{
		img: "images/items/facial_05.jpg",
		title: "Premium Facial",
		price: "₹5000",
	},

	// Manicure / Pedicure
	{ img: "images/items/manicure_01.jpg", title: "Foot Spa", price: "₹899" },
	{ img: "images/items/manicure_02.jpg", title: "Hand Spa", price: "₹899" },
	{
		img: "images/items/manicure_03.jpg",
		title: "Basic Pedicure",
		price: "₹1200",
	},
	{
		img: "images/items/manicure_04.jpg",
		title: "Basic Manicure",
		price: "₹1200",
	},
	{
		img: "images/items/manicure_05.jpg",
		title: "Advanced Pedicure",
		price: "₹2200",
	},
	{
		img: "images/items/manicure_06.jpg",
		title: "Advanced Manicure",
		price: "₹2200",
	},
	{
		img: "images/items/manicure_07.jpg",
		title: "Premium Manicure/Pedicure",
		price: "₹6000",
	},

	// Massage
	{ img: "images/items/massage_01.jpg", title: "Body Massage", price: "₹3500" },
	{
		img: "images/items/massage_02.jpg",
		title: "Aroma Therapy Massage",
		price: "₹3500",
	},
	{
		img: "images/items/massage_03.jpg",
		title: "Advanced Body Massage",
		price: "₹5500",
	},

	// Threading
	{
		img: "images/items/threading_01.jpg",
		title: "Eyebrow Threading",
		price: "₹100",
	},
	{
		img: "images/items/threading_02.jpg",
		title: "Upper Lips Threading",
		price: "₹50",
	},
	{
		img: "images/items/threading_03.jpg",
		title: "Forehead Threading",
		price: "₹50",
	},
	{
		img: "images/items/threading_04.jpg",
		title: "Full Face Threading",
		price: "₹300",
	},

	// Face Wax
	{ img: "images/items/face_wax_01.jpg", title: "Forehead Wax", price: "₹200" },
	{
		img: "images/items/face_wax_02.jpg",
		title: "Lower Face Wax",
		price: "₹350",
	},
	{
		img: "images/items/face_wax_03.jpg",
		title: "Full Face Wax",
		price: "₹500",
	},

	// Hair Services
	{ img: "images/items/hair_01.jpg", title: "Trimming", price: "₹300" },
	{
		img: "images/items/hair_02.jpg",
		title: "V Cut, U Cut & Layer Cut",
		price: "₹400",
	},
	{
		img: "images/items/hair_03.jpg",
		title: "Advanced Hair Cut (Blow Dry)",
		price: "₹800",
	},
	{
		img: "images/items/hair_04.jpg",
		title: "Hair Wash (Shampoo + Conditioner)",
		price: "₹300",
	},
	{
		img: "images/items/hair_05.jpg",
		title: "Hair Wash + Blow Dry",
		price: "₹500",
	},
	{
		img: "images/items/hair_06.jpg",
		title: "Advanced Hair Cut + Wash + Blow Dry",
		price: "₹800",
	},
    // Hair Treatments
    {
        img: "images/items/hair_07.jpg",
        title: "Front Flex",
        price: "₹300",
    },
    {
        img: "images/items/hair_08.jpg",
        title: "Root Touchup",
        price: "₹1500",
    },
    {
        img: "images/items/hair_08.jpg",
        title: "Global Hair Colour",
        price: "₹2500 onwards",
    },

    // Hydration Treatment
    {
        img: "images/items/hydration_01.jpg",
        title: "Power Dose (Brazilian Cacao)",
        price: "₹2000",
    },
    {
        img: "images/items/hydration_02.jpg",
        title: "Hydra Hair (Moistur Ampule)",
        price: "₹1500",
    },

    // Hair Spa
    {
        img: "images/items/hair_spa_01.jpg",
        title: "Basic Hair Spa",
        price: "₹1200 onwards",
    },
    {
        img: "images/items/hair_spa_02.jpg",
        title: "Protein Power Hair Spa",
        price: "₹2000 onwards",
    },

    // Oil Head Massage
    {
        img: "images/items/head_massage_01.jpg",
        title: "Deep Conditioning (Olive, Castor, Almond, Coconut)",
        price: "₹800",
    },

    // Chemical Treatments
    {
        img: "images/items/chemical_01.jpg",
        title: "Straightening",
        price: "₹4000 onwards",
    },
    {
        img: "images/items/chemical_02.jpg",
        title: "Smoothing",
        price: "₹3500 onwards",
    },
    {
        img: "images/items/chemical_03.jpg",
        title: "Botox / Nanoplastia / Keratin",
        price: "₹3000 onwards",
    },
    {
        img: "images/items/chemical_04.jpg",
        title: "Highlights (Crown Area)",
        price: "₹2000 onwards",
    },
    {
        img: "images/items/chemical_05.jpg",
        title: "Global Highlight",
        price: "₹5000 onwards",
    },
    {
        img: "images/items/chemical_06.jpg",
        title: "Advance Highlight",
        price: "₹4500 onwards",
    },

    // Temporary Styling
    {
        img: "images/items/styling_01.jpg",
        title: "Temporary Ironing",
        price: "₹1000 onwards",
    },
    {
        img: "images/items/styling_02.jpg",
        title: "Temporary Tong",
        price: "₹1500 onwards",
    },
    {
        img: "images/items/styling_03.jpg",
        title: "Hair Do",
        price: "₹700",
    },
    {
        img: "images/items/styling_04.jpg",
        title: "Hair Do with Accessories",
        price: "₹1200",
    },
	// Makeup
	{
		img: "images/items/makeup_01.jpg",
		title: "Basic Party Makeup",
		price: "₹3000",
	},
	{
		img: "images/items/makeup_02.jpg",
		title: "Advanced Party Makeup",
		price: "₹3700",
	},
	{ img: "images/items/makeup_03.jpg", title: "Makeup", price: "₹2000" },
	{ img: "images/items/makeup_04.jpg", title: "HD Makeup", price: "₹3000" },
	{
		img: "images/items/makeup_05.jpg",
		title: "Premium Makeup",
		price: "₹6000",
	},
	{ img: "images/items/makeup_06.jpg", title: "Hairstyle", price: "₹800" },
];

const itemsPerPage = 8;
let currentPage = 1;
const totalPages = Math.ceil(pricingData.length / itemsPerPage);
const container = document.getElementById("pricing-container");
const paginationDiv = document.getElementById("pagination");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");

function loadItems(page) {
	container.innerHTML = ""; // Clear existing items
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const itemsToLoad = pricingData.slice(startIndex, endIndex);

	itemsToLoad.forEach((item) => {
		const div = document.createElement("div");
		div.className = "col-md-6";
		div.innerHTML = `
            <div class="package_item">
                <img src="${item.img}" alt="" />
                <h5>
                    <a href="javascript:void(0);">${item.title}</a>
                    <span class="piborder"></span>
                    ${item.price}
                </h5>
            </div>
        `;
		container.appendChild(div);
	});

	updatePagination();
}

function updatePagination() {
	paginationDiv.innerHTML = "";

	// Create a single display element for current page
	const pageIndicator = document.createElement("span");
	pageIndicator.className = "current-page-indicator";
	pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
	paginationDiv.appendChild(pageIndicator);

	// Enable/Disable buttons
	prevPageBtn.disabled = currentPage === 1;
	nextPageBtn.disabled = currentPage === totalPages;
}

prevPageBtn.addEventListener("click", () => {
	if (currentPage > 1) {
		currentPage--;
		loadItems(currentPage);
	}
});

nextPageBtn.addEventListener("click", () => {
	if (currentPage < totalPages) {
		currentPage++;
		loadItems(currentPage);
	}
});

// Load the first set of items
loadItems(currentPage);
