const contacts = [
  { title: "Masoud Khasismatouri", phoneNumbers: ["+31 0636119192"], city: "Amsterdam" },
  { title: "Morhaf Ridha", phoneNumbers: ["+31 0631313131"], city: "Almere" },
  { title: "Sohamad Riez", phoneNumbers: ["+31 0612345678"], city: "Zaandam" },
  { title: "Garry Zekali", phoneNumbers: ["+31 0669696969"], city: "Eindhoven" },
  { title: "Hossein Gormez", phoneNumbers: ["+31 0634567831"], city: "Maastricht" }
];

  
  // Functie om zoekresultaten weer te geven
  function displayResults(results) {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; // Leegmaken van de vorige resultaten
  
    if (results.length === 0) {
      const noResultsItem = document.createElement("li");
      noResultsItem.textContent = "Geen resultaten gevonden.";
      resultsContainer.appendChild(noResultsItem);
    } else {
      results.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = result;
        resultsContainer.appendChild(listItem);
      });
    }
  }
  
    const searchInput = document.getElementById("searchInput");
    const contactList = document.getElementById("contactList");

    searchInput.addEventListener("input", handleSearch);

    function handleSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredContacts = contacts.filter(contact => {
        const contactTitle = contact.title.toLowerCase();
        const contactPhoneNumbers = contact.phoneNumbers.map(number => number.toLowerCase());
        const contactCity = contact.city.toLowerCase();
        return (
          contactTitle.includes(searchTerm) ||
          contactPhoneNumbers.some(number => number.includes(searchTerm)) ||
          contactCity.includes(searchTerm)
        );
      });
      
    
      renderContacts(filteredContacts);
    }

    function renderContacts(filteredContacts) {
      contactList.innerHTML = "";
    
      if (filteredContacts.length === 0) {
        const noResultsItem = document.createElement("li");
        noResultsItem.textContent = "Geen resultaten gevonden";
        contactList.appendChild(noResultsItem);
        return;
      }
    
      filteredContacts.forEach(contact => {
        const contactItem = document.createElement("li");
        const phoneNumbers = contact.phoneNumbers.join(", "); // Combineer de telefoonnummers in een enkele string
        contactItem.textContent = `${contact.title} - ${phoneNumbers} - ${contact.city}`;
        contactList.appendChild(contactItem);
      });
    }
    
    