import HierarchyComp3 from "./HierarchyComp3"

export default function HierarchyComp2() {
  return (
    <div className="bg-green-400 p-5">
      <span>Hi, I'm also a component</span>
        <HierarchyComp3 />
    </div>
  )
}
