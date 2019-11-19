const judgeVegetable = (vegetables, metric) =>
  vegetables.reduce((pickedVegetable, vegetable) =>
    pickedVegetable[metric] > vegetable[metric] ? pickedVegetable : vegetable
  ).submitter;
