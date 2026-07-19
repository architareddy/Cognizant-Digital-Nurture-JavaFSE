import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <div>
      <h1>My Academy Dashboard</h1>

      <CohortDetails
        cohortName="React Batch 1"
        startedOn="10-Jan-2026"
        status="ongoing"
        coach="Rahul"
        trainer="Priya"
      />

      <CohortDetails
        cohortName="Java FSE"
        startedOn="15-Dec-2025"
        status="completed"
        coach="Anil"
        trainer="Meera"
      />

      <CohortDetails
        cohortName="Angular"
        startedOn="20-Feb-2026"
        status="ongoing"
        coach="Kiran"
        trainer="Sonia"
      />
    </div>
  );
}

export default App;
