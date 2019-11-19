const countTickets = tickets =>
  tickets.reduce((acc, next) => ({ ...acc, [next]: acc[next] + 1 }), 
  { red: 0, green: 0, blue: 0 });

const generateMessage = color =>
  `You have the best odds of winning the ${color} raffle.`;

const bestOdds = (tickets, raffleEntries) => {
  const allCount = countTickets(tickets);
  const redCount = allCount.red / raffleEntries.red;
  const greenCount = allCount.green / raffleEntries.green;
  const blueCount = allCount.blue / raffleEntries.blue;

  if (redCount > greenCount) {
    if (redCount > blueCount) return generateMessage("red");
    return generateMessage("blue");
  } else {
    if (greenCount > blueCount) return generateMessage("green");
    return generateMessage("blue");
  }
};
