(async () => {
    // self calling async function just to get async
    // Setting an object in the database:
    await db.set("userInfo", { difficulty: "Easy" });
    // -> { difficulty: 'Easy' }

    // Pushing an element to an array (that doesn't exist yet) in an object:
    await db.push("userInfo.items", "Sword");
    // -> { difficulty: 'Easy', items: ['Sword'] }

    // Adding to a number (that doesn't exist yet) in an object:
    await db.add("userInfo.balance", 500);
    // -> { difficulty: 'Easy', items: ['Sword'], balance: 500 }

    // Repeating previous examples:
    await db.push("userInfo.items", "Watch");
    // -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 500 }
    await db.add("userInfo.balance", 500);
    // -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 1000 }

    // Fetching individual properties
    await db.get("userInfo.balance"); // -> 1000
    await db.get("userInfo.items"); // ['Sword', 'Watch']
})();