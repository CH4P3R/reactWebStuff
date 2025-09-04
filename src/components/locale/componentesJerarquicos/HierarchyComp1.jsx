import HierarchyComp2 from "./HierarchyComp2"

export default function HierarchyComp1() {
  return (
    <div className="bg-blue-500 p-5">
      <span>Hi, I'm a component</span>
        <HierarchyComp2 />
    </div>
  )
}
