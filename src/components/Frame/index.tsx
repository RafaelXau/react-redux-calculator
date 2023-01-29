
interface FrameProps {
  children: React.ReactNode;
}

const Frame = ({ children }: FrameProps) => {
  return (
    <div className="bg-slate-900 p-4 w-full max-w-md mx-auto mt-10 rounded-xl text-white flex flex-col gap-4 shadow-lg">
      {children}
    </div>
  )
}

export default Frame;