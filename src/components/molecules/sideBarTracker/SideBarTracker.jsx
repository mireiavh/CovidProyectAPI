import "./sideBarTracker.css"
import CasesCovid from "../casesCovid/CasesCovid"
import Top10 from "../top10/Top10"




function SideBarTracker() {
  return (
    <>
    <div className="sideBarcontainer">
      <CasesCovid></CasesCovid>
      <Top10></Top10>
    </div>
    </>
  )
}

export default SideBarTracker
