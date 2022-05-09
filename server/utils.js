const db = require("./models/db");

async function updateProcessStage() {
  console.log("utils in ");
  const adminObject = await db.Admin.find({});
  const endStudent =
    adminObject.startAllocationTime +
    adminObject.choiceFillingHours * 60 * 60 * 1000;
  const endProff =
    adminObject.startAllocationTime +
    (adminObject.choiceFillingHours + adminObject.proffSelectionHours) *
      60 *
      60 *
      1000;

  if (Date.now() < endStudent) {
    await db.Admin.findOneAndUpdate(
      { fName: "ADMIN" },
      { $set: { processStage: 1 } }
    );
  } else if (Date.now() < endProff) {
    await db.Admin.findOneAndUpdate(
      { fName: "ADMIN" },
      { $set: { processStage: 2 } }
    );
    lockAllPreferences();
  } else {
    await db.Admin.findOneAndUpdate(
      { fName: "ADMIN" },
      { $set: { processStage: 3 } }
    );
  }
  console.log("utils out");
}

async function lockAllPreferences() {
  await db.Student.updateMany(
    {},
    {
      $set: { isLocked: true },
    }
  );
}

async function choiceBasedAllocation() {
  const allStudents = await db.Student.find({});
  const allProffs = await db.Proff.find({});

  const allStudentsProffOrderIds = allStudents.map


}
async function randomAllocation() {
  
}

async function resetProcess() {
  db.Student.drop();
  db.Proff.drop();
  db.Admin.drop();  
}

module.exports = { updateProcessStage , lockAllPreferences,choiceBasedAllocation, randomAllocation};
