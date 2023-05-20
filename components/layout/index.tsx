import Sidebar from "../sidebar"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>
        <Sidebar/>
        <main>{children}</main>
      </div>
    </>
  )
}